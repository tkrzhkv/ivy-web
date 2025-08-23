import Tabs from "@/components/Tabs";

export default function WorkflowSection() {
  const tabs = [
    {
      id: "workflow",
      label: "EASY WORKFLOW",
      content: (
        <div className="flex flex-col gap-12 font-ivy_normal_medium">
          <p>
            OVER THE YEARS, WE’VE DEVELOPED A SMOOTH AND EFFICIENT WORKFLOW THAT
            WORKS GREAT FOR BOTH US AND OUR CLIENTS.
          </p>
          <p>
            YOU START BY SENDING US A LINK TO YOUR RAW FILES. WE’LL SEND BACK A
            COLOR TEST FOR YOUR APPROVAL. IF EVERYTHING LOOKS GOOD, WE’LL EDIT
            THE FULL GALLERY WITH THAT COLOR STYLE.
          </p>
          <p>
            <span className="text-[#540b16]">NEED ADJUSTMENTS? NO PROBLEM</span>{" "}
            — WE’RE HAPPY TO TWEAK IT. ONCE THE COLOR IS APPROVED, WE MOVE ON TO
            RETOUCHING THE FINAL IMAGES.
          </p>
        </div>
      ),
    },
    {
      id: "delivery",
      label: "RAPID DELIVERY",
      content: (
        <div className="flex flex-col gap-12 font-ivy_normal_medium">
          <p>
            WE KNOW HOW EAGER YOUR CLIENTS ARE TO SEE THEIR PHOTOS, SO WE TAKE
            TURNAROUND TIME SERIOUSLY — WITHOUT COMPROMISING QUALITY.
          </p>
          <p>
            ON AVERAGE, GALLERIES OF UP TO{" "}
            <b className="text-[#540b16]">200 PHOTOS</b> ARE DELIVERED IN{" "}
            <b className="text-[#540b16]">2–3 DAYS</b>, AND GALLERIES UP TO{" "}
            <b className="text-[#540b16]">1,000 PHOTOS</b> TAKE ABOUT{" "}
            <b className="text-[#540b16]">6–7 DAYS</b>.
          </p>
        </div>
      ),
    },
    {
      id: "editor",
      label: "PERSONALIZED EDITOR",
      content: (
        <div className="flex flex-col gap-12 font-ivy_normal_medium">
          <p>
            CONSISTENCY IS KEY — AND IT’S AT THE HEART OF EVERYTHING WE DO. WITH
            US, YOU CAN TRUST THAT YOUR EDITING STYLE AND IMAGE QUALITY WILL
            ALWAYS BE PRESERVED.
          </p>
          <p>
            MANY OF OUR LONG-TERM CLIENTS HAVE BEEN WITH US FOR OVER A YEAR —
            SOME FOR TWO OR EVEN THREE. YOU’LL ALWAYS WORK WITH THE SAME TRUSTED
            TEAM — NO SURPRISES, JUST RELIABLE RESULTS EVERY TIME.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col items-start justify-center">
      <div className="w-full h-[700px]">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}
