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

  // Cargar el contexto desde el archivo
  let context = '';
  try {
    context = await fs.readFile('./context.txt', 'utf-8');
  } catch (error) {
    console.error('Error al leer el archivo de contexto:', error);
    return;
  }

  // Leer el historial desde el archivo si existe, de lo contrario, inicializarlo como un objeto con una propiedad `messages` vacía
  let history = { messages: [] };
  try {
    const historyContent = await fs.readFile('./history.json', 'utf-8');
    history = JSON.parse(historyContent);
  } catch (error) {
    console.error('No se pudo leer el archivo de historial, se creará uno nuevo.', error);
  }

  let running = true;

  //Chat en consola
  while (running) {
    const prompt = await askQuestion('Tú: ');

    try {
      const result = await generateText({
        model,
        prompt,
        system: context,
        history: history.messages
      });
      const response = result.text;
      console.log(`Ollama: ${response}`);

      // Guardar en el historial con la estructura deseada
      history.messages.push(
        { role: 'user', content: prompt },
        { role: 'assistant', content: response }
      );

      // Escribir el historial en el archivo
      await fs.writeFile('./history.json', JSON.stringify(history, null, 2));

      // Actualizar el contexto con la última respuesta
      context = result.context;
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
