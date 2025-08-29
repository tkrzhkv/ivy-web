export default function FAQPage() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-stone-200 px-8 pt-30">
        <div className="mx-auto w-full">
          <h1 className="text-6xl font-bold text-black font-ivy_regular mb-4">
            FAQs
          </h1>
          <div className="h-1 bg-[#4b0d17] w-full"></div>
        </div>
      </div>

      {/* FAQ rows */}
      <div className="flex-1 grid grid-rows-3">
        {/* Row 1 */}
        <div className="bg-stone-200 w-full">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 items-start">
            <div className="p-8 md:p-12 flex flex-col items-center justify-center text-center">
              <h2 className="text-2xl font-ivy_normal_black text-[#4b0d17] mb-4 leading-tight">
                CAN YOU EDIT PICTURES
                <br />
                IN MY STYLE ?
              </h2>
              <p className="text-lg font-ivy_normal_black text-black">
                ABSOLUTELY.
              </p>
              <p className="text-sm font-ivy_normal_bold text-black leading-relaxed tracking-wide">
                BEFORE WE START EDITING YOUR WHOLE SERIES, <br />
                WE WILL SEND YOU A FEW TEST SAMPLES FOR APPROVAL.
              </p>
            </div>

            <div className="p-8 md:p-12 flex flex-col items-center justify-center text-center">
              <h2 className="text-2xl font-ivy_normal_black text-[#4b0d17] mb-4 leading-tight">
                IF I NEED MY EDITS SOONER DO YOU OFFER EXPEDITED EDITING ?
              </h2>
              <p className="text-sm font-ivy_normal_bold text-black leading-relaxed tracking-wide">
                YES, WE HAVE THIS OPTION AVAILABLE. YOU CAN ORDER THIS <br />
                SERVICE ON OUR WEBSITE OR THROUGH YOUR REPRESENTATIVE.
              </p>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="bg-[#4b0d17] w-full">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 items-start">
            <div className="p-8 md:p-12 flex flex-col items-center justify-center text-center">
              <h2 className="text-2xl font-ivy_normal_black text-white mb-4 leading-tight">
                WHAT IF I DON&apos;T LIKE THE EDITING RESULTS ?{" "}
              </h2>
              <p className="text-sm font-ivy_normal_bold text-white leading-relaxed tracking-wide">
                WE PRIORITIZE OUR CUSTOMER&apos;S SATISFACTION AND VALUE YOUR
                FEEDBACK. <br />
                THEREFORE, WE OFFER A ONE-TIME COMPLIMENTARY PHOTO RE-EDIT
                SERVICE.
              </p>
            </div>

            <div className="p-8 md:p-12 flex flex-col items-center justify-center text-center">
              <h2 className="text-2xl font-ivy_normal_black text-white mb-4 leading-tight">
                DO YOU HAVE A MINIMUM OR MAXIMUM QUANTITY OF PHOTOS FOR 1 ORDER
                ?
              </h2>
              <p className="text-sm font-ivy_normal_bold text-white leading-relaxed tracking-wide">
                YES, WE HAVE A MINIMUM OF 50 PHOTOS PER ORDER AND THE MAXIMUM IS
                2000. <br />
                EXCEPTIONS CAN BE MADE.
              </p>
            </div>
          </div>
        </div>

        {/* Row 3 */}
        <div className="bg-stone-200 w-full">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 items-start">
            <div className="p-8 md:p-12 flex flex-col items-center justify-center text-center">
              <h2 className="text-2xl font-ivy_normal_black text-[#4b0d17] mb-4 leading-tight">
                WILL YOU USE MY PHOTOS FOR YOUR OWN CONTENT ?
              </h2>
              <p className="text-sm font-ivy_normal_medium text-black leading-relaxed tracking-wide">
                YES, BUT ONLY WITH YOUR PERMISSION.
              </p>
              <p className="text-sm text-black font-ivy_normal_black leading-relaxed tracking-wide">
                WE ALWAYS ASK FIRST!
              </p>
            </div>

            <div className="p-8 md:p-12 flex flex-col font-ivy_normal_bold items-center justify-center text-center">
              <h2 className="text-2xl font-ivy_normal_black text-[#4b0d17] mb-4 leading-tight">
                WHAT TRANSFER SERVICES DO YOU USE?
              </h2>
              <p className="text-sm text-black leading-relaxed tracking-wide">
                WE WORK WITH ALL MAJOR TRANSFER SERVICES:
              </p>
              <p className="text-sm text-black leading-relaxed tracking-wide">
                DROPBOX, GOOGLE DRIVE, MYAIRBRIDGE ETC.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
