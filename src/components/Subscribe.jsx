import "./subscribe.less";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";

export default function Subscribe() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const inp = useRef(null);
    const [element, setElement] = useState("flexible");
    const [activeEmail, setActiveEmail] = useState(false);

    function MovePlaceholder() {
        setElement("active_good");
        inp.current.focus();
    }

    function removeMovePlaceholder() {
        if (!inp.current.value) {
            setElement("flexible");
        }
    }

    function onSubmit(data) {
        console.log(data);

        setActiveEmail(true);

        setTimeout(() => {
            setActiveEmail(false);
            reset();
            setElement("flexible");
        }, 3000);
    }

    const { ref, ...rest } = register("email", {
        required: "Email is required",
        pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
        },
    });

    return (
        <main className="subscribe">
            <div className={activeEmail ? "message active" : "message"}>
                <p>Success!</p>
            </div>

            <div className="container">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h3>Subscribe</h3>

                    <input
                        type="text"
                        {...rest}
                        ref={(e) => {
                            ref(e);
                            inp.current = e;
                        }}
                        onFocus={MovePlaceholder}
                        onBlur={removeMovePlaceholder}
                    />

                    {errors.email && (
                        <p className="error">{errors.email.message}</p>
                    )}

                    <p
                        className={element}
                        onClick={MovePlaceholder}
                    >
                        Email Address
                    </p>

                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </main>
    );
}
