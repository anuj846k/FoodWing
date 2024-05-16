const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-center"> Contact Us Page</h1>
      <form className="border border-black w-1/2 ">
        <input type="text" placeholder="Name" className="border border-black p-2 m-2"/>
        <input type="text" placeholder="message" className="border border-black p-2 m-2"/>
        <input type="submit" name="Submit"className="rounded-md border border-black p-2 m-2"/>
         
        
      </form>
    </div>
  );
};

export default Contact;
