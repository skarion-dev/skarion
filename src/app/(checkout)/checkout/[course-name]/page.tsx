import ContractForm from "@/components/Checkout/ContractForm";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { STATIC_COURSE_ID } from "@/constants/course";
import { CoursesService, OpenAPI } from "@/api-client";
import Image from "next/image";

export default async function CheckoutPage(props: {
  params: Promise<{ "course-name": string }>;
}) {
  const params = await props.params;
  const courseName = params["course-name"];
  const session = await auth();
  console.log("inside checkout page");
  if (!session?.user || !session.accessToken)
    return redirect(
      `/auth/sign-in?callbackUrl=${encodeURIComponent(`/checkout/${courseName}`)}`,
    );

  const purchasePayload = {
    email: session.user.email,
    courseId: STATIC_COURSE_ID,
  };

  let isCoursePurchased = false;
  let courseFound = false;
  try {
    OpenAPI.TOKEN = session.accessToken;

    const course = await CoursesService.coursesControllerFindOne(
      purchasePayload.courseId,
    );
    if (!course) {
      throw new Error("Course not found");
    }
    courseFound = true;

    const resp = await CoursesService.coursesControllerGetMyCourse(
      purchasePayload.courseId,
    );
    console.log("resp", resp);
    isCoursePurchased = !!resp;
  } catch (error) {
    console.log("error: ", error);
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-white">
      <div className="relative z-10 bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-6xl h-auto md:h-[80vh] grid grid-cols-1 md:grid-cols-2">
        <div className="h-full w-full items-left justify-between flex">
          <ContractForm
            purchasePayload={purchasePayload}
            token={session.accessToken}
            courseFound={courseFound}
            isPurchased={isCoursePurchased}
            user={session.user}
          />
        </div>
        <div className="bg-white h-full w-full relative overflow-hidden">
          <Image
            src="/checkout1.png"
            alt="Checkout"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#122461]/50 to-[#ff686b]/20" />
        </div>
      </div>
    </div>
  );
}
