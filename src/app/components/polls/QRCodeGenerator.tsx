import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function QRCode(props: { value: string; size: number }) {
  // Define the QRCode component. You can customize its appearance here.
  return (
    <img
      alt="QR Code"
      src={`https://api.qrserver.com/v1/create-qr-code/?data=${props.value}&size=${props.size}x${props.size}`}
    />
  );
}

function QRCodeGenerator() {
  const [qrCodeValue, setQRCodeValue] = useState<string>("");
  const location = useLocation();
  const uniqueId = location.state?.actiivatePoll.data?.uniqueId;
  useEffect(() => {
    // This effect runs whenever the `text` state changes.
    // It sets the QR code value to the current text.
    setQRCodeValue("https://openpoll.azurewebsites.net/" + uniqueId);
  }, []);

  return <div>{qrCodeValue && <QRCode value={qrCodeValue} size={508} />}</div>;
}

export default QRCodeGenerator;
