### Table of contents :

- [Prerequisite](#prerequisite)
- [Installation](#installation)
- [Extra informations](#extra-informations)

### Prerequisite

- Have [nvm](https://github.com/nvm-sh/nvm#installing-and-updating) installed in your machine (this project is running with node v20.9.0)

### Installation

- Clone the project `git clone https://github.com/cindy-sf/frontend-test.git`
- Go to the project directory `cd frontend-test`
- Use the good version of node : `nvm use`
- Create en `.env.local` and add this line :
  `URL=http://localhost:3000`

- Finally, install the dependencies by running `yarn`.
- Congratulations, you are ready to launch the project 🎉.
  Now run `yarn dev`.

### Extra informations

- **Technos**

  - NextJS
  - Tailwindcss
  - Api Router with next
  - App Router
  - React Testing Library

- **Improvements**

  - Add an ErrorBoundary
  - Implement a skeleton for loading state
  - Create a Typography component
  - Extratc `sortedNewsletters` to an utils
  - Have the possibility to switch user account via the interface

ℹ️ If you want to change the user subscription rights, you can update directly `subscriptions` key on [user fixtures](https://github.com/cindy-sf/frontend-test/blob/main/src/app/fixtures/user.json#L10).
