const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: "55a937bed7212d6e0f3bf3794afec45e-us17",
  server: "us17",
});

const listId = "45cf2ec451";
const subscribingUser = {
  email: "maik@qwerty.com",
};

async function run() {
  const response = await mailchimp.lists.addListMember(listId, {
    email_address: subscribingUser.email,
    status: "subscribed",
  });

  console.log(
    `Successfully added contact as an audience member. The contact's id is ${response.id}.`
  );
}

run();
