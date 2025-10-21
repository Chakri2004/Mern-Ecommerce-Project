import React from "react";

const TermsOfSale = () => {
  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "auto", fontFamily: "Arial, sans-serif", lineHeight: "1.6" }}>
      <h1 style={{ marginBottom: "20px", color: "#333" }}>Terms of Sale</h1>

      <section style={{ marginBottom: "20px" }}>
        <h3 style={{ color: "#555" }}>Order Acceptance</h3>
        <p>
          All orders are subject to product availability and confirmation of the order price. We reserve the right to refuse any order for any reason.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h3 style={{ color: "#555" }}>Pricing & Payment</h3>
        <p>
          Prices are as listed at the time of purchase. Payment must be completed in full before dispatch. We accept the payment methods listed on our site.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h3 style={{ color: "#555" }}>Shipping & Delivery</h3>
        <p>
          Delivery times are estimates and not guaranteed. Delays may occur due to unforeseen circumstances.
        </p>
      </section>

      <section style={{ marginBottom: "20px" }}>
        <h3 style={{ color: "#555" }}>Returns & Refunds</h3>
        <p>
          Returns and refunds are processed according to our official return policy. Please ensure items are returned in original condition.
        </p>
      </section>

      <section>
        <h3 style={{ color: "#555" }}>Contact</h3>
        <p>
          For any questions regarding our Terms of Sale, please contact our support team via the <a href="/support-center" style={{ color: "#0077cc" }}>Support Center</a>.
        </p>
      </section>
    </div>
  );
};

export default TermsOfSale;
