export const rolesPermissions = {
  admin: {
    access: ["/admin/*"],
  },
  content_manager: {
    access: [
      "/admin/ad-links",
      "/admin/course-categories",
      "/admin/courses",
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
      "/supplier-admin/articles",
      "/supplier-admin/library",
      "/supplier-admin/purchase-stats",
    ],
  },
};
