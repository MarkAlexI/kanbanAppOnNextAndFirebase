import { useState, useEffect } from "react";
import { Modal, ModalBody } from "./Modal";
import {
  useAppSelector,
  useAppDispatch
} from "@/components/redux/hooks";
import {
  getAddAndEditBoardModalValue,
  getAddAndEditBoardModalVariantValue,
  closeAddAndEditBoardModal,
  getCurrentBoardName,
} from "@/components/redux/features/appSlice";
import {
  useFetchDataFromDbQuery,
  useUpdateBoardToDbMutation,
} from "@/components/redux/services/apiSlice";
import { FaTimes } from "react-icons/fa";
import { id } from "../utils/data";

interface IBoardData {
  id: string,
  name: string;
  columns: {
    id: string;
    name: string;
    columns?: {
      name: string;
      tasks?: { [key: string]: any }[]
    };
  }[];
}

let addBoardData = {
  id: id(),
  name: "",
  columns: [
    {
      id: id(),
      name: "",
      tasks: [],
    },
  ],
};

export default function AddAndEditBoardModal() {
  const isOpen = useAppSelector(getAddAndEditBoardModalValue);
  const closeModal = () => dispatch(closeAddAndEditBoardModal());
  const [boardData, setBoardData] = useState<IBoardData>();
  const [isBoardNameEmpty, setIsBoardNameEmpty] = useState<boolean>(false);

  const modalVariant = useAppSelector(getAddAndEditBoardModalVariantValue);
  const currentBoardTitle = useAppSelector(getCurrentBoardName);

  const isVariantAdd = modalVariant === "Add New Board";
  const dispatch = useAppDispatch();
  let { data } = useFetchDataFromDbQuery();

  useEffect(() => {
    if (data) {

      if (isVariantAdd) {
        setBoardData(addBoardData);
      } else {
        const activeBoard = data[0].boards.find(
          (board: { name: string }) => board.name === currentBoardTitle
        );
        setBoardData(activeBoard);
      }
    }
  }, [data, modalVariant]);

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal}>
      <ModalBody>
        <p>{modalVariant}</p>
      </ModalBody>
    </Modal>
  );
}
