import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "landing",
    loadChildren: () =>
      import("./landing/landing.module").then(m => m.LandingModule)
  },
  {
    path: "dashboard",
    loadChildren: () =>
      import("./dashboard/dashboard.module").then(m => m.DashboardModule)
  },
  {
    path: "admin",
    loadChildren: () => import("./admin/admin.module").then(m => m.AdminModule)
  },
  {
    path: "course",
    loadChildren: () =>
      import("./course/course.module").then(m => m.CourseModule)
  },
  {
    path: "auth",
    loadChildren: () => import("./@auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: "payment",
    loadChildren: () =>
      import("./payment/payment.module").then(m => m.PaymentModule)
  },
  { path: "", redirectTo: "landing", pathMatch: "full" },
  { path: "**", redirectTo: "landing" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
