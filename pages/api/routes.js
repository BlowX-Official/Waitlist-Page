import { NextResponse } from "next/server";
import Welcome from "../../components/Home/Welcome"
import { Resend } from "resend";

const resend = new Resend(`re_SnzVM7Zo_6G8yrgzqf6m7W6wW9JdTPSpJ`);

export async function SendEmail({email}) {
    // const body = req.json();
    try {
        const data = await resend.sendEmail({
            from: "onboarding@resend.dev",
            to: email,
            subject: 'Wailist Joined Successfully',
            react: Welcome()
        })

        return NextResponse.json(data)
    } catch (error) {
        console.log(error);
        // return NextResponse.json({error})
    }
}