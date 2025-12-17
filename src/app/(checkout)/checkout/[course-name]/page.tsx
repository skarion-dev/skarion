import ContractForm from "@/components/Checkout/ContractForm";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { STATIC_COURSE_ID } from "@/constants/course";
import { ApiError, CoursesService, OpenAPI } from "@/api-client";

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
    // return redirect(`/auth/sign-in`);
  }

  return (
    <div className="h-screen flex items-center justify-between">
      <div className="bg-black h-full w-full"></div>
      <div className="h-full w-full items-center justify-center flex">
        <ContractForm
          purchasePayload={purchasePayload}
          token={session.accessToken}
          courseFound={courseFound}
          isPurchased={isCoursePurchased}
        />
      </div>
    </div>
  );
}
