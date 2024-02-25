import { Routes, Route } from "react-router-dom";
import React, { lazy, memo, Suspense } from "react";
import Preloader from "./preloader/Preloader";
import ErrorBoundary from "./ErrorBounds/ErrorBoundary";
const Orders = lazy(() => import("../main/orders/Orders")),
  Aside = lazy(() => import("../menu/Aside/Aside"));

const Routed = [
  { path: "/orders", component: <Orders /> },
  { path: "*", component: <Orders /> },
];

const AppRouter = memo(() => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Preloader />}>
              <Aside />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<Preloader />}>
                <ErrorBoundary>
                  <Orders />
                </ErrorBoundary>
              </Suspense>
            }
          ></Route>
          {Routed &&
            Routed.map((data, id) => (
              <Route
                key={id}
                path={data.path}
                element={
                  <Suspense fallback={<Preloader />}>
                    <ErrorBoundary>{data.component}</ErrorBoundary>
                  </Suspense>
                }
              ></Route>
            ))}
        </Route>
      </Routes>
    </>
  );
});

export default AppRouter;
