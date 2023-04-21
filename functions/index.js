// Main entry point for Firebase Cloud Functions

const functions = require("firebase-functions")
const sgMail = require("@sendgrid/mail")
const cors = require("cors")({ origin: true })

const recieveQuoteTemplate = require("./emailTemplates/recieveQuoteTemplate")
const recieveHireMe = require("./emailTemplates/recieveHireMe")
const recieveGeneralInquiry = require("./emailTemplates/recieveGeneralInquiry")
const confirmRecieptQuoteTemplate = require("./emailTemplates/confirmRecieptQuoteTemplate")
const confirmRecieptHireMe = require("./emailTemplates/confirmRecieptHireMe")
const confirmRecieptGeneralInquiry = require("./emailTemplates/confirmRecieptGeneralInquiry")

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
        let emailTemplate

        switch (formData.contactType) {
            case "Get a Quote":
                emailTemplate = recieveQuoteTemplate(formData)
                break
            case "Hire Me":
                emailTemplate = recieveHireMe(formData)
                break
            case "General Inquiry":
                emailTemplate = recieveGeneralInquiry(formData)
                break
            default:
                res.status(400).json({
                    success: false,
                    error: "Invalid contact type",
                })
                return
        }

        const msg = {
            to: "240designworks@gmail.com",
            from: "240designworks@gmail.com",
            subject: `MM 2023 Portfolio: ${
                formData.contactName ? formData.contactName : formData.name
            }  ${
                formData.contactType === "General Inquiry"
                    ? "has a"
                    : "would like to"
            } ${formData.contactType}`,
            text: emailTemplate.text,
            html: emailTemplate.html,
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
