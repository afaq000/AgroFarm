//@ts-nocheck
import React from 'react';
import Image from '../component/Buyer/Image';

type Props = {
  className?: string;
  title?: string;
  oncancelclick?: () => void;
  ondeleteclick?: () => void;
  purchaseDetails: string | null; // Updated props to reflect the structure of purchaseDetails
};

const Confirmation = ({
  className,
  title,
  purchaseDetails,
  oncancelclick,
  ondeleteclick,
}: Props) => {
  return (
    <div className={`${className} w-full flex flex-col gap-4 p-4 `}>
      <div className="flex justify-center">
        <Image
          alt=""
          src="/Invester/question.png"
          height={0}
          width={0}
          className="w-[42px] h-[77px]"
        />
      </div>
      <p className="font-NotoSans font-semibold text-lg text-[#153060] text-center">
        {title}
      </p>
      <div className=" flex justify-center  gap-2">
        {purchaseDetails && (
          <>
            <p>{purchaseDetails.planId}</p>
            {/* Add other purchase details as needed */}
          </>
        )}
        <button
          type="button"
          onClick={oncancelclick}
          className="border px-4 py-1.5 text-[#1672EC] font-ManRope text-xs font-bold rounded"
          aria-label="Cancel button"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={ondeleteclick}
          className="border px-4 py-1.5 text-white bg-[#1672EC] font-ManRope text-xs font-bold rounded"
          aria-label="Delete button"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default Confirmation;
