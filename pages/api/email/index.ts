import sendgrid from "@sendgrid/mail";
import type { NextApiRequest, NextApiResponse } from "next";
import { IContactFormValues } from "../../../types";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

async function sendEmail(req: NextApiRequest, res: NextApiResponse) {
  try {
    const formValues = req.body as IContactFormValues;

    const t = await sendgrid.send({
      to: formValues.email,
      from: "info@mutably.io",
      bcc: ["info@mutably.io", "galla@mutably.io"],
      templateId: "d-5b4d7dc284ea4a06aff9a6ff11d364ef",
      dynamicTemplateData: {
        ...formValues,
      },
    });
    console.log("email sent", t);
  } catch (error) {
    console.log("error", error.response.body);
    return res.status(500).json({ error: "Mail Delivery failed" });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
