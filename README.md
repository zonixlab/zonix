<img alt="Zonix CLI banner" width="100%" src="https://i.ibb.co/hfgqmfw/zonix-cli.png" />

## About

Zonix is a command line interface integrated with the OpenAI artificial intelligence API designed to help you with your tasks quickly and easily. The CLI has a very nice authentication system where, through a command, the user can quickly login using their own API key. Its interface is very intuitive and with an organized color system to differentiate the messages of success, error and tips, in addition to having a minimum response time.

## Install

Install the `zonix` globally with

```shell
npm install -g zonix
```

## Authentication

The first command you must run in `zonix` is auth to authenticate using the OpenAI API key:

```shell
zonix auth --key API_KEY
```
*Replace API_KEY with your generated key in: https://platform.openai.com/account/api-keys*

## Usage

You can use `zonix` in your preferred terminal, including in its terminal integrated in its code editor, which makes it easier to search for help during the development of your tasks.

Example of use:

```shell
zonix translate --text 'zonix is the best CLI in the world' --language portuguese
```

## Commands

| Command | Options | Required | Description |
| -------- | -------- | -------- | -------- |
| `auth` | `-k` / `--key` | ✓ | Command used for authentication in the OpenAI API. |
| `translate` | `-t` / `--text` <br> `-l` / `--language` | ✓ <br> ✓ | Command used to quickly translate text, regardless of language. |
| `hello` | `-n` / `--name` | ✗ | Command used to receive an AI greeting (used to check if `zonix` is working). |
