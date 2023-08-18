import ArLocal from "arlocal";
(async () => {
  const arLocal = new ArLocal(8080, true, "./store", true);
  await arLocal.start();
})();
