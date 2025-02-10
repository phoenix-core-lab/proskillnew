export const rolesPermissions = {
  admin: {
    access: [
      "/admin/*",
      "/admin/supplier-requests-courses",
      "/admin/supplier-request-library",
      "/admin/supplier-requests-articles",
      "/admin/statistic",
    ],
  },
  content_manager: {
    access: [
      "/admin/ad-links",
      "/admin/course-categories",
      "/admin/courses",
      "/admin/courses-module",
      "/admin/courses-lesson",
      "/admin/courses-test",
      "/admin/articles",
      "/admin/library",
    ],
  },
  support_manager: {
    access: ["/admin/requests", "/admin/users", "/admin/supplier-requests"],
  },
  supplier: {
    access: [
      "/supplier-admin/courses",
      "/supplier-admin/courses-module",
      "/supplier-admin/courses-lesson",
      "/supplier-admin/courses-test",
      "/supplier-admin/articles",
      "/supplier-admin/library",
      "/supplier-admin/purchase-stats",
    ],
  },
};
