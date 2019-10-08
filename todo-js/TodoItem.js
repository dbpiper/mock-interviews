export const TodoItem = ({ handleClick, key, data }) => {
  return {
    render: () => `
      <ul onclick="${() => handleClick(key)}" id="todoItem_${key}">
        ${data}
      </ul>
    `,
  };
};