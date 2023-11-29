import axios from "axios";
export const checkoutHandler = async (amount,Name) => {

    const { data: { key } } = await axios.get("https://flipkart1-clone-backend1.vercel.app/api/getkey")

    const { data: { order } } = await axios.post("https://flipkart1-clone-backend1.vercel.app/checkout", {
        amount
    })

    const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: Name,
        description: "Tutorial of RazorPay",
        image: "https://avatars.githubusercontent.com/u/25058652?v=4",
        order_id: order.id,
        callback_url: " /paymentverification",
        prefill: {
            name: "Gaurav Kumar",
            email: "gaurav.kumar@example.com",
            contact: "9999999999"
        },
        notes: {
            "address": "Razorpay Corporate Office"
        },
        theme: {
            "color": "#121212"
        }
    };
    const razor = new window.Razorpay(options);
    razor.open();
}
