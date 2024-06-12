export const id = () => Math.random().toString(36).substring(2, 10);

export const data = {
  "boards": [
    {
      id: id(),
      name: "ToDo List",
      columns: [
        {
          id: id(),
          name: "Now",
          tasks: [
            {
              id: id(),
              title: "Launch version one",
              status: "Now"
            },
            {
              id: id(),
              title: "Extended this project",
              status: "Now"
            }
          ]
        },
        {
          id: id(),
          name: "Next",
          tasks: []
        },
        {
          id: id(),
          name: "Later",
          tasks: []
        }
      ]
    }
  ]
}
