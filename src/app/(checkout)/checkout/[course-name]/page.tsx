import ContractForm from "@/components/Checkout/ContractForm";

export default function CheckoutPage() {
  return (
    <div className="h-[100vh] flex items-center justify-between">  
      <div className="bg-black h-full w-full">

      </div>
      <div className="h-full w-full items-center justify-center flex">
        <ContractForm></ContractForm>
      </div>
    </div>
  );
}
