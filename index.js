const { program } = require("commander");

const contactsService = require("./db/contacts");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contactsService.listContacts();
      console.log(allContacts);
      break;

    case "get":
      const oneContact = await contactsService.getContactById(id);
      console.log(oneContact);
      break;

    case "add":
      const newContact = await contactsService.addContact({
        name,
        email,
        phone,
      });
      console.log(newContact);
      break;

    case "remove":
      const removeContact = await contactsService.removeContact(id);
      console.log(removeContact);
      break;

    default:
      console.log("\x1B[31m Unknown action type!");
  }
};

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();
console.log(options);
invokeAction(options);

// invokeAction({ action: "list" });
//invokeAction({ action: "get", id: "qdggE76Jtbfd9eWJHrssH" });
// invokeAction({
//   action: "add",
//   name: "Allen Raymond",
//   email: "nulla.ante@vestibul.co.uk",
//   phone: "(992) 914-3792",
// });

// invokeAction({
//   action: "remove",
//   id: "AeHIrLTr6JkxGE6SN-0Rw",
// });

// const { Command } = require("commander");
// const program = new Command();
// program
//   .option("-a, --action <type>", "choose action")
//   .option("-i, --id <type>", "user id")
//   .option("-n, --name <type>", "user name")
//   .option("-e, --email <type>", "user email")
//   .option("-p, --phone <type>", "user phone");

// program.parse(process.argv);

// const argv = program.opts();

// // TODO: рефакторить
// async function invokeAction({ action, id, name, email, phone }) {
//   switch (action) {
//     case "list":
//       const allContacts = await contactsServise.listContacts();
//       console.log(allContacts);
//       break;

//     case "get":
//       const oneContact = await contactsServise.getContactById(contactId);
//       console.log(oneContact);
//       break;

//     case "add":
//       // ... name email phone
//       break;

//     case "remove":
//       // ... id
//       break;

//     default:
//       console.warn("\x1B[31m Unknown action type!");
//   }
// }

// invokeAction(argv);
// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "qdggE76Jtbfd9eWJHrssH" });
