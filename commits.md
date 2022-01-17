## Commits & Branches
Usar la variación de Angular, recordar que tanto features como refactories deben preceder de un test.

- `feature(api/player route): add endpoint GET /players/:id` Nueva funcionalidad.
- `refactor(client/dashboard): date logic for product expirations` Mejoramos el código sin agregar funcionalidad.
- `fix(api/users controller): return 404 on inexistent user`
- `test(api/math): add missing test for division by zero` Agregando un test.
- Se recomienda no cambiar el commit del merge

Al crear branches utiliza la misma lógica para nombrarla: `feat/user_creation`,  `fix/currency_with_decimal`,  `chore/lint_ci`,  `refactor/auth_routing`.