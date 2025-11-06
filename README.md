<!--
  - SPDX-FileCopyrightText: 2021 Nextcloud GmbH and Nextcloud contributors
  - SPDX-License-Identifier: AGPL-3.0-or-later
-->
## @nextcloud/babel-config

[![REUSE status](https://api.reuse.software/badge/github.com/nextcloud-libraries/babel-config)](https://api.reuse.software/info/github.com/nextcloud-libraries/babel-config)
[![npm last version](https://img.shields.io/npm/v/@nextcloud/babel-config.svg?style=flat-square)](https://www.npmjs.com/package/@nextcloud/babel-config)
[![Dependabot status](https://img.shields.io/badge/Dependabot-enabled-brightgreen.svg?longCache=true&style=flat-square&logo=dependabot)](https://dependabot.com)


This is a package containing the unified global babel config used by all nextcloud apps.
It contains the necessary dependencies and peerDependencies so that other apps cannot update if this config does not support it.
Please always use dependabot to update your apps, OR pay attention to the peer dependencies error messages!


## Installation

```bash
npm install @nextcloud/babel-config --save-dev
```

## Usage

Add a file `babel.config.js` in the root directory of your app repository with the following content:

```js
const babelConfig = require('@nextcloud/babel-config')

module.exports = babelConfig
```

## Contributing
### Contribution guidelines
All contributions to this repository are considered to be licensed under the AGPLv3 or any later version.

Nextcloud doesn't require a CLA (Contributor License Agreement).
The copyright belongs to all the individual contributors.
Therefore we recommend that every contributor adds the following line to the [AUTHORS](AUTHORS.md) file if they made substantial changes to the code:

```
- <your name> <your email address>
```

**We can only accept contributions from authors that agree on the [Developer Certificate of Origin](https://developercertificate.org/)!**
For this please make sure to sign-off your commits if you want to contribute code (`git commit -s`).

Please read the [Code of Conduct](https://nextcloud.com/community/code-of-conduct/). This document offers some guidance to ensure Nextcloud participants can cooperate effectively in a positive and inspiring atmosphere and to explain how together we can strengthen and support each other.

### Release new version

 1. Bump the package version with `npm version`
 2. Push version bump commit
 3. Create a new release with proper changelog https://github.com/nextcloud-libraries/babel-config/releases/new
