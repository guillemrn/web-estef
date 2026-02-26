"use server";

export async function submitContactForm(data: {
    nombre: string;
    email: string;
    tipoProyecto: string;
    mensaje: string;
}) {
    const webhookUrl = process.env.MAKE_WEBHOOK_URL;

    if (!webhookUrl) {
        console.error("MAKE_WEBHOOK_URL is not defined in environment variables.");
        return { success: false, error: "Error de configuración del servidor." };
    }

    const payload = {
        ...data,
        fecha: new Date().toISOString(),
    };

    try {
        const response = await fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            console.error(`Error sending data to Make: ${response.status} ${response.statusText}`);
            return { success: false, error: "Hubo un error al enviar el mensaje. Por favor intenta de nuevo." };
        }

        return { success: true };
    } catch (error) {
        console.error("Server Action Exception:", error);
        return { success: false, error: "Error de conexión. Por favor intenta de nuevo más tarde." };
    }
}
