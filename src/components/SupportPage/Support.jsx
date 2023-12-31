import "./../../App.css";
import "./../ContactPage/Contact.css";
import "./Support.css";

export const Support = () => {
  return (
    <div className="support-container">
      <div className="support-text">
        <h1>
          Help Magdalena spread the joy of early music across generations!
        </h1>
        <p style={{ fontSize: 18 }}>
        Just as music shines brightest with an audience, Magdalena soars highest with your support. By making a donation, you can help us bring the gift of music to audiences near and far. All proceeds go directly toward operating costs such as venue rentals, recording fees, advertising, instrument purchases, and artist compensation. We deeply thank you for your support of early music!
        </p>
      </div>
      <div className="support-form">
        <form
          action="https://www.paypal.com/donate"
          method="post"
          target="_blank"
        >
          <input type="hidden" name="hosted_button_id" value="NWTAKY2NXS8YU" />
          <input
            className="donate-btn"
            type="submit"
            border="0"
            value="donate!"
            title="PayPal - The safer, easier way to pay online!"
            alt="Donate with PayPal button"
          />
        </form>
      </div>
    </div>
  );
};
