const Contact = ({ name, number, id }) => {
  return (
    <div>
      <p>name:{name}</p>
      <p>number:{number}</p>
      <button type="button">Delete</button>
    </div>
  );
};

export default Contact;
