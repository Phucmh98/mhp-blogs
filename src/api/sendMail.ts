export type SendMailParams = {
    name: string;
    email: string;
    message: string;
};

export const sendMail = async (data: SendMailParams) => {
    try {
        const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                service_id: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                template_id: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                user_id: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
                template_params: {
                    name: data.name,
                    email: data.email,
                    message: data.message,
                },
            }),
        });

        if (res.ok) {
            return { success: true };
        } else {
            const errorText = await res.text();
            return { success: false, error: errorText };
        }
    } catch (error) {
        console.error('Send mail error:', error);
        return { success: false, error };
    }
};