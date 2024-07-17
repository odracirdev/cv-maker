import chalk from 'chalk'

export const error = message => 
  console.log(chalk.redBright(message))

export const success = message => 
  console.log(chalk.greenBright(message))

export const info = message => 
  console.log(chalk.blueBright(message))

export const warning = message => 
  console.log(chalk.yellowBright(message))
