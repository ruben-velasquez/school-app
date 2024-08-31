import { Signature } from "@/redux/features/signaturesSlice";

export const clearSignatureForm = (type: "edit" | "add") => {
  const signatureNameInput = document.querySelector(
    `#${type}-signature-dialog form input[name='name']`
  ) as HTMLInputElement;
  const signatureIconInput = document.querySelector(
    `#${type}-signature-dialog form select[name='icon']`
  ) as HTMLSelectElement;

  signatureNameInput.value = "";
  signatureIconInput.value = "none";
};

export const fillEditSignatureForm = (signature: Signature) => {
  const signatureNameInput = document.querySelector(
    "#edit-signature-dialog form input[name='name']"
  ) as HTMLInputElement;
  const signatureIconInput = document.querySelector(
    "#edit-signature-dialog form select[name='icon']"
  ) as HTMLSelectElement;

  signatureNameInput.value = signature.name;
  signatureIconInput.value = signature.icon;
};
