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

        const formData = req.body

        const msg = {
            to: "240designworks@gmail.com",
            from: "240designworks@gmail.com", // Must be verified sender
            subject: `Contact Form Submission - ${formData.contactType}`,
            text: `Project Name: ${formData.projectName}
            Date: ${formData.date}
            Deadline: ${formData.deadline}
            RecievedDateAndTime: ${formData.recievedDateandTime}
            submissionTimestamp: ${formData.submissionTimestamp}
            Name: ${formData.name}
            Contact Name: ${formData.contactName}
            Company: ${formData.company}
            Position: ${formData.position}
            Custom Positionr: ${formData.customPosition}
            Email: ${formData.email}
            Project Type: ${formData.projectType}
            Developer?: ${formData.developer}
            Message: ${formData.message}`,
            html: `<h2>Contact Form Submission</h2><br>
            <p><strong>Contact Type:</strong> ${formData.contactType}<br>
            <strong>Date: </strong>${formData.date}<br>
            <strong>Deadline:</strong> ${formData.deadline}<br>
            <strong>RecievedDateAndTime:</strong> ${formData.recievedDateandTime}<br>
            <strong>submissionTimestamp: </strong>${formData.submissionTimestamp}<br>
            <strong>Name:</strong> ${formData.name}<br>
            <strong>Contact Name:</strong> ${formData.contactName}<br>
             <strong>Company:</strong> ${formData.company}<br>
            <strong>Position:</strong>   ${formData.position} <br>
            <strong>Custom Position: </strong>  ${formData.customPosition} <br>
            <strong>Email:</strong> ${formData.email}<br>
            <strong>Developer?:</strong> ${formData.developer}<br>
            <strong>Project Name:</strong> ${formData.projectName}<br>
            <strong>Project Type:</strong> ${formData.projectType}<br>
            <strong>Message:</strong> ${formData.message}</p>`,
        }

        try {
            await sgMail.send(msg)
            console.log("Email sent")
            res.status(200).send({ success: true, formData })
        } catch (error) {
            console.error(error)
            res.status(500).send({ success: false, error: error.message })
        }
    })
})
