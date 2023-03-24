<img alt="Zonix CLI banner" width="100%" src="https://i.ibb.co/hfgqmfw/zonix-cli.png" />

## About

Zonix is a command line interface integrated with the OpenAI artificial intelligence API designed to help you with your tasks quickly and easily. The CLI has a very nice authentication system where, through a command, the user can quickly login using their own API key. Its interface is very intuitive and with an organized color system to differentiate the messages of success, error and tips, in addition to having a minimum response time.

## Install

Install the `zonix` globally with

```shell
npm install -g zonix
```

## Authentication

The first command you must run in `zonix` is `auth` to authenticate using the OpenAI API key:

```shell
zonix auth --key API_KEY
```

_Replace API_KEY with your generated key in: https://platform.openai.com/account/api-keys_

## Usage

You can use `zonix` in your preferred terminal, including in its terminal integrated in its code editor, which makes it easier to search for help during the development of your tasks.

Usage examples:

```shell
zonix generate-test --component ProductCard --path ./src/components/ProductCard/index.tsx
```

```shell
zonix translate --text 'zonix is the best CLI in the world' --language portuguese
```

## Commands

| Command         | Options                                                           | Required        | Description                                                                                                                                                            |
| --------------- | ----------------------------------------------------------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `auth`          | `-k` / `--key`                                                    | ✓               | Command used for authentication in the OpenAI API.                                                                                                                     |
| `generate-test` | `-c` / `--component` <br> `-p` / `--path` <br> `-l` / `--library` | ✓ <br> ✓ <br> ✗ | Command used to create unit tests of your project's components. When passing the component's path, the test file is automatically generated in the component's folder. |
| `translate`     | `-t` / `--text` <br> `-l` / `--language`                          | ✓ <br> ✓        | Command used to translate a text quickly, regardless of the requested language.                                                                                        |
| `hello`         | `-n` / `--name`                                                   | ✗               | Command used to receive an AI greeting (used to check if `zonix` is working).                                                                                          |

## Contribute

To contribute to the `zonix` project follow the steps mentioned below:

1. Fork the `zonix` project.
2. Clone the project (forked by you).
3. Make necessary improvements, create new commands or fix a found bug.
4. In case of creating a new command, you must add it to the command table of the `README.md` file, containing the name of the command, options, if the options are mandatory to execute the command or not, and a brief description of its functionality, following the standard.
5. Log your change in the `CHANGELOG.md` file by following the [keepachangelog](https://keepachangelog.com/en/1.0.0/) documentation.
6. Submit your Pull Request (PR) containing your changes.

## Licensed

Zonix is [MIT](https://github.com/zonixlab/zonix/blob/main/LICENSE) licensed.
