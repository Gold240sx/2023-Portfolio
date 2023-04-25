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
                debugInfo: "The request method should be POST",
            })
            return
        }

        const formData = req.body
        let emailTemplate
        let confirmationTemplate

        switch (formData.contactType) {
            case "Get a Quote":
                emailTemplate = recieveQuoteTemplate(formData)
                confirmationTemplate = confirmRecieptQuoteTemplate(formData)
                break
            case "Hire Me":
                emailTemplate = recieveHireMe(formData)
                confirmationTemplate = confirmRecieptHireMe(formData)
                break
            case "General Inquiry":
                emailTemplate = recieveGeneralInquiry(formData)
                confirmationTemplate = confirmRecieptGeneralInquiry(formData)
                break
            default:
                res.status(400).json({
                    success: false,
                    error: "Invalid contact type",
                    debugInfo: `Received contact type: ${formData.contactType}`,
                })
                return
        }

        const msg = {
            to: "240designworks@gmail.com",
            from: "240designworks@gmail.com",
            subject: "michael-martell.com: New Contact Request!",
            // subject: `MM 2023 Portfolio: ${
            //     formData.contactName ? formData.contactName : formData.name
            // }  ${
            //     formData.contactType === "General Inquiry"
            //         ? "has a"
            //         : "would like to"
            // } ${formData.contactType}`,
            text: emailTemplate.text,
            html: emailTemplate.html,
        }

        const confirmationMsg = {
            to: formData.email,
            from: "240designworks@gmail.com",
            subject: "Confirmation: We received your inquiry!",
            text: confirmationTemplate.text,
            html: confirmationTemplate.html,
        }

        const messages = [msg, confirmationMsg]

        try {
            await sgMail.send(messages)
            console.log("Emails sent successfully!")
            res.status(200).send({ success: true })
        } catch (error) {
            console.error(error)
            res.status(500).send({ success: false, error: error.message })
        }
    })
})
