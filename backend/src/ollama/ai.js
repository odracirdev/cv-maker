import { ollama } from 'ollama-ai-provider';
import { generateText } from 'ai';
import readline from 'readline';
import fs from 'fs/promises';

const model = ollama('llama3');

// Leer el input desde la consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const askQuestion = (query) => {
  return new Promise((resolve) => rl.question(query, resolve));
};

const main = async () => {
  console.log("Inicia la conversación con Ollama. Aprieta Ctrl+C para salir.");

  // Creacion del contexto y lectura del archivo context.txt
  let context = '';
  try {
    context = await fs.readFile('./context.txt', 'utf-8');
  } catch (error) {
    console.error('Error al leer el archivo de contexto:', error);
    return;
  }

  let running = true;

  //Chat en consola
  while (running) {
    const prompt = await askQuestion('Tú: ');

    try {
      const result = await generateText({
        model,
        prompt,
        context
      });
      console.log(`Ollama: ${result.text}`);
    } catch (error) {
      console.error('Error al generar texto:', error);
    }
  }

  rl.close();
};

main();

/**
 * La IA funciona en la consola del editor.
 * Cuando se agregue una interfaz simple para el chat
 * modificar su funcionalidad para conectarlo con el front
 *
 * Retocar el archivo context.txt para darle mas o menos contexto
*/
