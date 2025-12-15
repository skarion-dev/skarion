import ContractForm from "@/components/Checkout/ContractForm";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { STATIC_COURSE_ID } from "@/constants/course";
import { ApiError, CoursesService, OpenAPI } from "@/api-client";

export default async function CheckoutPage() {
  const session = await auth();
  if (!session?.user || !session.accessToken) return redirect(`/auth/sign-in`);

  const purchasePayload = {
    email: session.user.email,
    courseId: STATIC_COURSE_ID,
  };

  let isCoursePurchased = false;
  try {
    OpenAPI.TOKEN = session.accessToken;
    const myCourses = await CoursesService.coursesControllerGetMyCourses();
    isCoursePurchased = myCourses.some(
      (course) => course.id === purchasePayload.courseId,
    );
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
          isPurchased={isCoursePurchased}
        />
      </div>
    </div>
  );
}
