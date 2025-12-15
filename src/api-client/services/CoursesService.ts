/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CourseResponse } from "../models/CourseResponse";
import type { CreateCourseDto } from "../models/CreateCourseDto";
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";
export class CoursesService {
  /**
   * Get all courses
   * @returns CourseResponse List of all courses
   * @throws ApiError
   */
  public static coursesControllerFindAll(): CancelablePromise<
    Array<CourseResponse>
  > {
    return __request(OpenAPI, {
      method: "GET",
      url: "/courses",
    });
  }
  /**
   * Create a new course
   * @param requestBody
   * @returns CourseResponse The created course
   * @throws ApiError
   */
  public static coursesControllerCreate(
    requestBody: CreateCourseDto,
  ): CancelablePromise<CourseResponse> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/courses",
      body: requestBody,
      mediaType: "application/json",
    });
  }
  /**
   * Get my courses
   * @returns CourseResponse List of my courses
   * @throws ApiError
   */
  public static coursesControllerGetMyCourses(): CancelablePromise<
    Array<CourseResponse>
  > {
    return __request(OpenAPI, {
      method: "GET",
      url: "/courses/my-courses",
    });
  }
  /**
   * Get a course by ID
   * @param id
   * @returns CourseResponse The found course
   * @throws ApiError
   */
  public static coursesControllerFindOne(
    id: string,
  ): CancelablePromise<CourseResponse> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/courses/{id}",
      path: {
        id: id,
      },
      errors: {
        404: `Course not found`,
      },
    });
  }
}
