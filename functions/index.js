// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require("firebase-functions")
const sgMail = require("@sendgrid/mail")
const cors = require("cors")({ origin: true })

sgMail.setApiKey(functions.config().sendgrid.api_key)

exports.sendTestEmail = functions.https.onRequest((req, res) => {
    cors(req, res, async () => {
        if (req.method !== "POST") {
            res.status(400).send({
                success: false,
                error: "Invalid request method",
            })
            return
        }

        const msg = {
            to: "240designworks@gmail.com", // Change to your recipient
            from: "240designworks@gmail.com", // Change to your verified sender
            subject: "Sending with SendGrid is Fun",
            text: "and easy to do anywhere, even with Node.js",
            html: "<strong>and easy to do anywhere, even with Node.js</strong>",
        }

        try {
            await sgMail.send(msg)
            console.log("Email sent")
            res.status(200).send({ success: true })
        } catch (error) {
            console.error(error)
            res.status(500).send({ success: false, error: error.message })
        }
    })
})
