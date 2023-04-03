# sample-nextjs-matching

## Summary
This is a sample application for Hexabase.

[https://hexajob.hexabase.app/](https://hexajob.hexabase.app)

![https://hexajob.hexabase.app/](https://hexajob.hexabase.app/site-image.png) 

## Prerequisites 
Download and install or execute cmd to install

|name            |version     |URL or cmd | note
|:-----------|:---------------|-------------------------------------|--
|node        |v16.x or later  |https://nodejs.org/en/download/| 
|npm         |latest          |$ (sudo) npm install -g npm |

## User registration to Hexabase and creation your Workspace
- access https://app.hexabase.com/login
- Click `Don't have an account? Signup`
- Select Signup with email address
- After entering the email address of the user you want to register, proceed with authentication from the received email
- After password registration, user registration is completed and your workspace is created

## Download source locally from repository
- `git clone` or download the zip file and extract it locally

## Restore application to workspace created using hexabase-cli
- access https://github.com/hexabase/hexabase-cli/tree/master
- Execute the following command
- `npm install -g hexabase-cli`
- `hx contexts:set prod --server https://api.hexabase.com --sse https://sse.hexabase.com `
- `hx contexts:use prod`
- `hx contexts:login`
- `hx workspaces:use` *select your workspace
- `hx projects:restore {Path where you placed the source}\sample_template.zip`
- if there are no problems, the template application will be restored to your workspace

## Create .env according to the created environment
- copy .env.sample and paste .env
### Example
- `NEXT_PUBLIC_LINKER_API="https://api.hexabase.com/api/v0"`
- `NEXT_PUBLIC_TOKEN_API="Bearer xxxxx"` # Set persistence token. See https://bit.ly/3G6cQYj
- `NEXT_PUBLIC_TOKEN_API: "Bearer xxxxx"`
- `NEXT_PUBLIC_DOMAIN="hexajob.hexabase.app"` # Set service domain.
- `NEXT_PUBLIC_SENDER_ADDRESS="noreply@hexabase.com"` # Set automail sender.
- `NEXT_PUBLIC_JOB_SEEKERS_DATASTORE_ID="63e0ce87407d1d80eca6cc70"` # Set job_seekers database ID.

## Launch the front application on localhost
- Run `yarn install` at the path where you placed the source
- Run `yarn dev` application starts at localhost:3000