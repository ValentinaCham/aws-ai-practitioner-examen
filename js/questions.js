/* Banco de preguntas AWS AI Practitioner - Examen de Práctica
   Cada pregunta: { id, question, type: 'single'|'multi', pick, options: [{key,text,correct,reason}] } */

const QUESTIONS = [
  {
    id: 1,
    question: "An organization is developing a model to predict the price of a product based on various features like size, weight, brand and manufacturing date. Which machine learning approach would be best suited for this task?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "Classification", correct: false, reason: "Classification predice categorías (ej. 'caro'/'barato'), no un valor numérico continuo como el precio exacto." },
      { key: "B", text: "Regression", correct: true, reason: "Regression está diseñada exactamente para predecir un valor numérico continuo (el precio) a partir de features." },
      { key: "C", text: "Clustering", correct: false, reason: "Clustering agrupa datos similares sin etiquetas; no predice un valor específico." },
      { key: "D", text: "Dimensionality Reduction", correct: false, reason: "Esta técnica reduce el número de features, no predice un resultado." }
    ]
  },
  {
    id: 2,
    question: "A company is expanding its use of artificial intelligence. Which core principle should they prioritize to establish clear guidelines, oversight and accountability for AI development and use?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "Bias Prevention", correct: false, reason: "Es un objetivo importante, pero solo cubre el sesgo, no el marco completo de reglas y responsabilidad." },
      { key: "B", text: "Accuracy and reliability", correct: false, reason: "Se enfoca en el rendimiento técnico del modelo, no en las políticas de supervisión y responsabilidad." },
      { key: "C", text: "Data protection and security", correct: false, reason: "Cubre solo la protección de datos, un componente dentro de la gobernanza, no el principio general." },
      { key: "D", text: "Governance", correct: true, reason: "La gobernanza es el principio que establece políticas, supervisión (oversight) y accountability para todo el ciclo de vida de la IA." }
    ]
  },
  {
    id: 3,
    question: "A company is starting to use generative artificial intelligence (AI) on AWS. To ensure responsible AI practices, which tool can provide them with guidance and information?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "AWS Marketplace", correct: false, reason: "Es un lugar para comprar/vender software y datos, no un recurso de guía sobre IA responsable." },
      { key: "B", text: "AWS AI Service Cards", correct: true, reason: "Documentan casos de uso previstos, limitaciones y consideraciones responsables de cada servicio de IA de AWS." },
      { key: "C", text: "Amazon SageMaker", correct: false, reason: "Es una plataforma para construir/entrenar modelos, no una fuente de documentación de IA responsable." },
      { key: "D", text: "Amazon Bedrock", correct: false, reason: "Da acceso a modelos fundacionales, pero no es en sí mismo un recurso de guía de prácticas responsables." }
    ]
  },
  {
    id: 4,
    question: "What is the primary purpose of feature engineering in machine learning?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "To ensure consistent performance of the model", correct: false, reason: "Eso corresponde al monitoreo del modelo, no a feature engineering." },
      { key: "B", text: "To evaluate the model's performance", correct: false, reason: "La evaluación se hace con métricas (accuracy, F1, etc.), no con feature engineering." },
      { key: "C", text: "To gather and preprocess data features", correct: false, reason: "Es parte de la preparación de datos en general, pero no describe el propósito central de crear/transformar variables." },
      { key: "D", text: "To transform data and create variables (features) for the model", correct: true, reason: "Feature engineering consiste específicamente en transformar datos y crear nuevas variables que mejoren el aprendizaje del modelo." }
    ]
  },
  {
    id: 5,
    question: "A small company wants to use machine learning to predict customer churn, but they lack an expert dedicated data science team. Which AWS tool can help them build models easily without extensive coding?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "Amazon SageMaker JumpStart", correct: false, reason: "Ofrece modelos y plantillas pre-construidas, pero requiere más conocimiento técnico para adaptarlas y desplegarlas." },
      { key: "B", text: "Amazon SageMaker Studio", correct: false, reason: "Es un IDE completo para ML que sigue requiriendo escribir código." },
      { key: "C", text: "Amazon SageMaker Canvas", correct: true, reason: "Es la herramienta visual 'no-code' diseñada para que usuarios sin experiencia en programación construyan modelos de ML." },
      { key: "D", text: "Amazon SageMaker Data Wrangler", correct: false, reason: "Se enfoca en preparar y limpiar datos, no en construir el modelo predictivo completo." }
    ]
  },
  {
    id: 6,
    question: "A financial institution is developing a fraud detection model. The project lead announced that they would be using MLOps. How would you explain MLOps in the context of this project?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "A tool for visualizing ML model performance", correct: false, reason: "Es demasiado limitado; MLOps no es solo una herramienta de visualización." },
      { key: "B", text: "A set of practices for managing the entire lifecycle of ML systems", correct: true, reason: "MLOps abarca todo el ciclo de vida: datos, entrenamiento, despliegue, monitoreo y mantenimiento." },
      { key: "C", text: "A process for deploying and maintaining ML models in production", correct: false, reason: "Describe solo una parte (despliegue/mantenimiento), no el ciclo de vida completo." },
      { key: "D", text: "A framework for building and training ML models", correct: false, reason: "Cubre solo la fase de construcción/entrenamiento, dejando fuera despliegue y monitoreo." }
    ]
  },
  {
    id: 7,
    question: "Which AWS service can be used to create a knowledge-based chatbot that can answer questions about a company's products and services, using the company's internal documents as a source of information?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "Amazon SageMaker", correct: false, reason: "Requiere construir y entrenar un modelo desde cero; no es una solución lista para chatbots empresariales." },
      { key: "B", text: "Amazon Q Business", correct: true, reason: "Está diseñado para crear asistentes empresariales que responden preguntas usando los documentos internos de la compañía." },
      { key: "C", text: "Amazon Polly", correct: false, reason: "Convierte texto a voz; no entiende ni responde preguntas basadas en documentos." },
      { key: "D", text: "Amazon Rekognition", correct: false, reason: "Es un servicio de análisis de imágenes y video, no de texto/documentos." }
    ]
  },
  {
    id: 8,
    question: "A development team needs to select a service for storing and querying vector embeddings. Which AWS service is best suited for this?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "Glue Data Catalog", correct: false, reason: "Es un catálogo de metadatos para ETL, no almacena ni consulta embeddings vectoriales." },
      { key: "B", text: "Amazon S3", correct: false, reason: "Es almacenamiento de objetos; no ofrece capacidades nativas de búsqueda vectorial." },
      { key: "C", text: "Amazon Redshift", correct: false, reason: "Es un data warehouse orientado a analítica estructurada, no está optimizado para búsqueda vectorial." },
      { key: "D", text: "Amazon OpenSearch Service", correct: true, reason: "Tiene soporte nativo para almacenar y realizar búsquedas de similitud sobre vectores/embeddings." }
    ]
  },
  {
    id: 9,
    question: "An organization wants to evaluate the security and compliance practices of AWS services used by vendors selling AI products. Which AWS service can help them access AWS compliance reports and certifications?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "AWS Organization", correct: false, reason: "Sirve para gestionar múltiples cuentas de AWS, no para acceder a reportes de cumplimiento." },
      { key: "B", text: "Amazon Inspector", correct: false, reason: "Escanea vulnerabilidades técnicas en recursos, no provee certificaciones de cumplimiento." },
      { key: "C", text: "AWS CloudTrail", correct: false, reason: "Registra llamadas a la API para auditoría, no reportes de compliance/certificaciones." },
      { key: "D", text: "AWS Artifact", correct: true, reason: "Es el portal on-demand para acceder a reportes de cumplimiento y certificaciones de AWS." }
    ]
  },
  {
    id: 10,
    question: "A machine learning model performs well on training data but poorly on new data. What is the likely problem?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "Overfitting", correct: true, reason: "El modelo memorizó los datos de entrenamiento (baja bias, alta varianza) y no generaliza a datos nuevos." },
      { key: "B", text: "Underfitting", correct: false, reason: "Si hubiera underfitting, el rendimiento sería malo también en entrenamiento, no solo en datos nuevos." },
      { key: "C", text: "Insufficient training data", correct: false, reason: "Puede causar underfitting, pero no explica específicamente el patrón de buen desempeño en train y malo en test." },
      { key: "D", text: "Poor data quality", correct: false, reason: "Datos de mala calidad normalmente afectarían también el desempeño en entrenamiento." }
    ]
  },
  {
    id: 11,
    question: "A company wants to improve the quality of large language model (LLM) responses by accessing external information. Which method requires the least amount of development effort?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "Few-Shot Learning", correct: false, reason: "Ayuda con ejemplos en el prompt, pero no conecta al modelo con información externa actualizada." },
      { key: "B", text: "Zero-Shot Learning", correct: false, reason: "No añade ninguna información externa; depende solo del conocimiento ya entrenado del modelo." },
      { key: "C", text: "Retrieval Augmented Generation - RAG", correct: true, reason: "Permite incorporar información externa en tiempo de consulta sin reentrenar el modelo, siendo el método de menor esfuerzo." },
      { key: "D", text: "Fine Tuning", correct: false, reason: "Requiere reentrenar el modelo con datos etiquetados, siendo la opción de mayor esfuerzo de desarrollo." }
    ]
  },
  {
    id: 12,
    question: "A model has been trained to recognize handwritten digits in images. However, the model is not accurate. A ML expert has advised that epoch value should be increased. What is epoch in the context of Machine Learning?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "A measure of the accuracy of a model during training", correct: false, reason: "La precisión se mide con métricas de evaluación, no con el concepto de epoch." },
      { key: "B", text: "A single pass through the entire training dataset by the model", correct: true, reason: "Un epoch es exactamente una pasada completa del modelo por todo el dataset de entrenamiento." },
      { key: "C", text: "The process of splitting the dataset into training and testing sets", correct: false, reason: "Eso es la división train/test, un paso distinto de la preparación de datos." },
      { key: "D", text: "The number of layers in a neural network", correct: false, reason: "Eso describe la arquitectura del modelo, no el concepto de epoch." }
    ]
  },
  {
    id: 13,
    question: "Which of the following is considered a hyperparameter in a machine learning model?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "Weights of the neural network", correct: false, reason: "Los pesos son parámetros que el modelo aprende durante el entrenamiento, no hiperparámetros." },
      { key: "B", text: "Learning rate of the optimization algorithm", correct: true, reason: "El learning rate se define antes del entrenamiento y controla el proceso de optimización: es un hiperparámetro clásico." },
      { key: "C", text: "Output of the activation function", correct: false, reason: "Es un cálculo interno del modelo durante la inferencia/entrenamiento, no un hiperparámetro." },
      { key: "D", text: "Predictions made by the model", correct: false, reason: "Son la salida del modelo, no una configuración previa al entrenamiento." }
    ]
  },
  {
    id: 14,
    question: "A model tends to give very similar outputs even when you vary the inputs slightly. Which inference time parameter can be adjusted to make it a little more creative?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "Learning Rate", correct: false, reason: "Es un hiperparámetro de entrenamiento, no se ajusta durante la inferencia." },
      { key: "B", text: "Batch Size", correct: false, reason: "También es un parámetro de entrenamiento, no afecta la creatividad de la salida en inferencia." },
      { key: "C", text: "Temperature", correct: true, reason: "La temperatura controla la aleatoriedad de la generación de texto en inferencia; subirla aumenta la creatividad/variedad." },
      { key: "D", text: "Epochs", correct: false, reason: "Es un parámetro de entrenamiento (número de pasadas por el dataset), no de inferencia." }
    ]
  },
  {
    id: 15,
    question: "You're evaluating a language generation model on various tasks related to text generation. To assess the quality of the generated text, which evaluation metric best measures its semantic similarity to human-written text?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "BERTScore", correct: true, reason: "Usa embeddings contextuales para medir similitud semántica real entre el texto generado y el de referencia." },
      { key: "B", text: "BLEU", correct: false, reason: "Mide coincidencia de n-gramas (principalmente para traducción), no similitud semántica profunda." },
      { key: "C", text: "Perplexity", correct: false, reason: "Mide qué tan bien el modelo predice el siguiente token, no la similitud semántica con un texto de referencia." },
      { key: "D", text: "ROUGE", correct: false, reason: "Está orientado a medir recall de contenido clave en resúmenes, no similitud semántica general." }
    ]
  },
  {
    id: 16,
    question: "A developer is designing an AI system and needs a solution that provides comprehensive tools for analyzing and explaining model predictions. Which AWS service is specifically designed to enhance transparency and explainability in this context?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "Amazon SageMaker Clarify", correct: true, reason: "Está diseñado específicamente para detectar sesgos y explicar las predicciones del modelo, mejorando la transparencia." },
      { key: "B", text: "Amazon SageMaker Debugger", correct: false, reason: "Se enfoca en depurar y perfilar el proceso de entrenamiento, no en explicabilidad de predicciones." },
      { key: "C", text: "Amazon SageMaker Autopilot", correct: false, reason: "Automatiza la construcción y ajuste de modelos, no la explicabilidad." },
      { key: "D", text: "Amazon SageMaker Data Wrangler", correct: false, reason: "Se usa para preparar y transformar datos, no para explicar predicciones." }
    ]
  },
  {
    id: 17,
    question: "A company plans to train and build it's own Foundation Model. What are potential drawbacks of this approach against using a pre-trained Foundation Model? [Select Two]",
    type: "multi", pick: 2,
    options: [
      { key: "A", text: "More complex implementation process", correct: true, reason: "Construir un FM propio implica diseño de arquitectura, infraestructura masiva y expertise avanzado, mucho más complejo que usar uno ya entrenado." },
      { key: "B", text: "Reduced performance", correct: false, reason: "No es necesariamente cierto: un modelo propio bien entrenado puede igualar o superar a uno pre-entrenado; no es un drawback inherente." },
      { key: "C", text: "Risk of higher hallucination", correct: false, reason: "La alucinación no está directamente ligada a entrenar tu propio modelo vs. usar uno pre-entrenado." },
      { key: "D", text: "Increased development cost", correct: true, reason: "Entrenar un FM desde cero requiere enormes cantidades de datos, cómputo y tiempo, elevando significativamente el costo." }
    ]
  },
  {
    id: 18,
    question: "A company wants to generate content using an existing popular pre-trained AI model. They have limited AI expertise and don't want to manage the model themselves. Which AWS service would best suit their needs?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "Amazon Textract", correct: false, reason: "Extrae texto de documentos; no genera contenido nuevo." },
      { key: "B", text: "Amazon Comprehend", correct: false, reason: "Analiza texto (sentimiento, entidades); no es un servicio generativo." },
      { key: "C", text: "Amazon Bedrock", correct: true, reason: "Da acceso gestionado a modelos fundacionales pre-entrenados sin necesidad de gestionar infraestructura ni tener expertise profundo en ML." },
      { key: "D", text: "Amazon SageMaker", correct: false, reason: "Requiere más conocimiento técnico para construir, entrenar y gestionar modelos por cuenta propia." }
    ]
  },
  {
    id: 19,
    question: "What type of training data would be most suitable to fine-tune a model to respond to questions in a certain format and style?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "Columnar dataset", correct: false, reason: "Es un formato de datos tabulares, no relacionado con estilo de respuesta en texto." },
      { key: "B", text: "Labeled data", correct: false, reason: "Es demasiado genérico y no especifica el formato de entrada/salida necesario para ajustar estilo de respuesta." },
      { key: "C", text: "Transcription logs", correct: false, reason: "Son registros de voz a texto, no relacionados con enseñar formato/estilo de respuesta." },
      { key: "D", text: "Text-pairs of prompts and responses", correct: true, reason: "Pares de prompt-respuesta permiten al modelo aprender directamente el formato y estilo deseado de las respuestas." }
    ]
  },
  {
    id: 20,
    question: "A company needs to log API calls to Amazon Bedrock for compliance - including details about the API call, the user and the timestamp. Which AWS service can assist with this?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "AWS CloudTrail", correct: true, reason: "Registra detalladamente cada llamada a la API, incluyendo el usuario y el timestamp, ideal para compliance." },
      { key: "B", text: "Amazon CloudWatch", correct: false, reason: "Se enfoca en métricas y logs de rendimiento, no en el registro detallado de llamadas a la API para auditoría." },
      { key: "C", text: "AWS IAM", correct: false, reason: "Gestiona permisos y identidades, no registra el historial de llamadas a la API." },
      { key: "D", text: "AWS Security Hub", correct: false, reason: "Agrega hallazgos de seguridad de otros servicios, no realiza el logging detallado de llamadas API." }
    ]
  },
  {
    id: 21,
    question: "A data science team wants to improve a model's performance. They want to increase the amount and diversity of data used for training and modify the algorithm's learning rate. Which combination of ML pipeline steps will meet these requirements? [Select Two]",
    type: "multi", pick: 2,
    options: [
      { key: "A", text: "Data Augmentation", correct: true, reason: "Aumenta la cantidad y diversidad de los datos de entrenamiento generando variaciones de los existentes." },
      { key: "B", text: "Model monitoring", correct: false, reason: "Sirve para vigilar el modelo ya en producción, no para aumentar datos ni ajustar hiperparámetros." },
      { key: "C", text: "Feature engineering", correct: false, reason: "Transforma features existentes, pero no aumenta la diversidad/cantidad de datos ni ajusta el learning rate." },
      { key: "D", text: "Hyperparameter tuning", correct: true, reason: "Permite ajustar el learning rate y otros hiperparámetros del algoritmo para mejorar el desempeño." }
    ]
  },
  {
    id: 22,
    question: "A company wants to ensure that the content generated by their Amazon Bedrock-powered application adheres to their ethical guidelines and avoids harmful or offensive content. Which AWS service can help them implement these safeguards?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "Amazon SageMaker", correct: false, reason: "Es una plataforma general de ML, no ofrece un mecanismo de filtrado de contenido dañino para Bedrock." },
      { key: "B", text: "Amazon Comprehend", correct: false, reason: "Analiza texto (sentimiento/entidades), pero no está diseñado como barrera de contenido en tiempo real para Bedrock." },
      { key: "C", text: "Amazon Textract", correct: false, reason: "Extrae datos de documentos, no filtra contenido generado por IA." },
      { key: "D", text: "Guardrails for Amazon Bedrock", correct: true, reason: "Está diseñado específicamente para filtrar y bloquear contenido dañino u ofensivo según políticas definidas en Bedrock." }
    ]
  },
  {
    id: 23,
    question: "Your company is training a machine learning model on a dataset stored in S3 that contains sensitive customer information. How can you ensure that any sensitive information in the data is removed or anonymized before training the model? [Select Two]",
    type: "multi", pick: 2,
    options: [
      { key: "A", text: "Use S3 encryption to protect the data at rest.", correct: false, reason: "Protege los datos de accesos no autorizados, pero no identifica ni elimina/anonimiza información sensible." },
      { key: "B", text: "Use Amazon Macie to identify sensitive information within the dataset.", correct: true, reason: "Macie está diseñado para detectar automáticamente datos sensibles (PII) dentro de un dataset." },
      { key: "C", text: "Use S3 access controls to limit access to authorized personnel.", correct: false, reason: "Restringe quién puede ver los datos, pero no anonimiza ni elimina la información sensible en sí." },
      { key: "D", text: "Implement data masking techniques to replace sensitive information.", correct: true, reason: "El data masking reemplaza directamente la información sensible, cumpliendo el objetivo de anonimizarla." }
    ]
  },
  {
    id: 24,
    question: "A company wants to use generative AI to create marketing slogans for their products. Why should the company carefully review all generated slogans?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "Generative AI may generate slogans that are too long and difficult to remember.", correct: false, reason: "Es una preocupación menor de estilo, no el motivo principal de revisión responsable." },
      { key: "B", text: "Generative AI may struggle to capture the unique brand identity of the company.", correct: false, reason: "Es un problema de calidad/marca, pero no la razón central de riesgo que exige revisión responsable." },
      { key: "C", text: "Generative AI may produce slogans that are inappropriate or misleading.", correct: true, reason: "La IA generativa puede alucinar o generar contenido inapropiado/engañoso, por lo que la revisión humana es clave para uso responsable." },
      { key: "D", text: "Generative AI may require extensive training data to generate effective slogans.", correct: false, reason: "No es relevante para justificar por qué se debe revisar el contenido ya generado." }
    ]
  },
  {
    id: 25,
    question: "Your company is training machine learning models on EC2 instances. You're concerned about the security of these models and want to identify potential vulnerabilities in the underlying infrastructure. Which AWS service can help you scan your EC2 instances for vulnerabilities?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "AWS X-Ray", correct: false, reason: "Traza y depura solicitudes distribuidas de aplicaciones, no escanea vulnerabilidades de infraestructura." },
      { key: "B", text: "Amazon CloudWatch", correct: false, reason: "Monitorea métricas y logs de rendimiento, no realiza escaneos de vulnerabilidades." },
      { key: "C", text: "Amazon Inspector", correct: true, reason: "Está diseñado específicamente para escanear instancias EC2 (y otros recursos) en busca de vulnerabilidades." },
      { key: "D", text: "AWS Config", correct: false, reason: "Rastrea cambios de configuración y cumplimiento de reglas, no vulnerabilidades de seguridad como tal." }
    ]
  },
  {
    id: 26,
    question: "A machine learning model for loan approvals performs better for applicants from urban areas because the training data contains more approval examples from urban areas. What type of bias is this an example of?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "Sampling bias", correct: true, reason: "El dataset de entrenamiento no representa equitativamente a todos los grupos (urbano vs. rural), lo cual es sampling bias." },
      { key: "B", text: "Algorithm bias", correct: false, reason: "Este sería un sesgo introducido por el diseño del algoritmo, no por una representación desigual en los datos." },
      { key: "C", text: "Observer bias", correct: false, reason: "Se refiere a la subjetividad humana al etiquetar datos, no a la falta de representación de un grupo." },
      { key: "D", text: "Recency bias", correct: false, reason: "Ocurre al sobreponderar datos recientes, no está relacionado con el desbalance urbano/rural descrito." }
    ]
  },
  {
    id: 27,
    question: "For a dataset of social network connections where each user has relationships with multiple other users, which machine learning algorithm is most suitable for classifying these interconnected relationships into predefined categories?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "Linear Regression", correct: false, reason: "Predice valores continuos y no está diseñada para modelar relaciones interconectadas tipo grafo." },
      { key: "B", text: "Decision Trees", correct: false, reason: "Divide datos tabulares en subconjuntos, pero no captura naturalmente relaciones de red entre nodos." },
      { key: "C", text: "Graph Neural Networks", correct: true, reason: "Están diseñadas específicamente para aprovechar la estructura de grafos y capturar relaciones entre nodos interconectados." },
      { key: "D", text: "Logistic Regression", correct: false, reason: "Trabaja con features independientes para clasificación binaria, sin modelar conexiones entre entidades." }
    ]
  },
  {
    id: 28,
    question: "A robot is tasked with navigating a maze to reach a goal. Which machine learning paradigm would be most suitable for training the robot to learn the optimal path via self-learning trial and error?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "Supervised Learning", correct: false, reason: "Requiere datos etiquetados con la 'respuesta correcta', que no existen naturalmente para cada paso del laberinto." },
      { key: "B", text: "Unsupervised Learning", correct: false, reason: "Busca patrones en datos no etiquetados, pero no está orientado a aprender acciones dirigidas a una meta." },
      { key: "C", text: "Random Learning", correct: false, reason: "No es un paradigma real de machine learning." },
      { key: "D", text: "Reinforcement Learning", correct: true, reason: "Permite que el agente aprenda por ensayo y error mediante recompensas/castigos del entorno, ideal para navegación en laberintos." }
    ]
  },
  {
    id: 29,
    question: "A researcher wants to adapt a pre-trained machine learning model to perform well on a new domain-specific task with limited labeled data. Which of the following approaches would be most efficient & suitable?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "Continued Pre-Training with additional unlabeled data", correct: false, reason: "Amplía el conocimiento general del modelo, pero no está tan enfocado en la tarea específica etiquetada." },
      { key: "B", text: "Fine Tuning with labeled data from the new domain", correct: true, reason: "Permite adaptar eficientemente el modelo pre-entrenado a la tarea específica usando los datos etiquetados limitados disponibles." },
      { key: "C", text: "Using the pre-trained model without any further adjustment", correct: false, reason: "El modelo no se adaptaría al dominio específico nuevo, limitando su precisión en esa tarea." },
      { key: "D", text: "Training from scratch with the new labeled data", correct: false, reason: "Es ineficiente y requeriría muchos más datos y recursos que aprovechar el conocimiento ya pre-entrenado." }
    ]
  },
  {
    id: 30,
    question: "If you are a small startup with unpredictable workloads and need to experiment with different foundation models, which pricing model would be most suitable for you on Amazon Bedrock?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "On-Demand", correct: true, reason: "Es pago por uso, ideal para cargas impredecibles y para experimentar sin comprometerse a capacidad reservada." },
      { key: "B", text: "Provisioned Throughput", correct: false, reason: "Implica capacidad reservada, más adecuada para cargas de trabajo predecibles y constantes, no para experimentación esporádica." },
      { key: "C", text: "Model Customization (fine tuning, continued pretraining)", correct: false, reason: "Es un modelo de precio para entrenamiento/personalización, no para el uso flexible de inferencia que necesita el startup." },
      { key: "D", text: "Custom Contracts", correct: false, reason: "Son acuerdos empresariales negociados, poco prácticos para una startup pequeña con cargas impredecibles." }
    ]
  },
  {
    id: 31,
    question: "In the context of natural language processing, which of the following is a fundamental unit of text used to represent words or subwords?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "Token", correct: true, reason: "Un token es la unidad básica de texto (palabra o subpalabra) resultante de la tokenización." },
      { key: "B", text: "Vector Embedding", correct: false, reason: "Es la representación numérica de un token, no el token en sí." },
      { key: "C", text: "n-gram", correct: false, reason: "Es una secuencia de n palabras/caracteres consecutivos, un concepto distinto al de unidad básica de texto." },
      { key: "D", text: "Vocabulary", correct: false, reason: "Es el conjunto completo de todos los tokens que el modelo reconoce, no una unidad individual." }
    ]
  },
  {
    id: 32,
    question: "A developer is creating an AI system to predict customer churn. To ensure transparency, they need to document key details about the model. Which AWS tool is best suited for this task?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "Amazon SageMaker Clarify", correct: false, reason: "Detecta sesgos y explica predicciones, pero no es la herramienta de documentación formal del modelo." },
      { key: "B", text: "AWS AI Service Cards", correct: false, reason: "Documentan los servicios de IA pre-entrenados de AWS, no modelos personalizados construidos por el usuario." },
      { key: "C", text: "Amazon SageMaker Model Cards", correct: true, reason: "Está diseñado específicamente para documentar detalles del modelo: uso previsto, datos de entrenamiento y métricas." },
      { key: "D", text: "Amazon SageMaker JumpStart", correct: false, reason: "Provee modelos y plantillas pre-construidas, no documentación del modelo propio." }
    ]
  },
  {
    id: 33,
    question: "An engineer is training a Machine Learning Model. In order to prevent underfitting or overfitting, how should the model be trained with data?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "With high bias and high variance", correct: false, reason: "Es la peor combinación posible: presenta ambos problemas (underfitting y overfitting) a la vez." },
      { key: "B", text: "With low bias and low variance", correct: true, reason: "Es el equilibrio ideal que evita tanto underfitting (alto bias) como overfitting (alta variance)." },
      { key: "C", text: "With high bias and low variance", correct: false, reason: "Describe underfitting: el modelo es demasiado simple y no captura los patrones." },
      { key: "D", text: "With low bias and high variance", correct: false, reason: "Describe overfitting: el modelo se ajusta demasiado a los datos de entrenamiento y no generaliza." }
    ]
  },
  {
    id: 34,
    question: "You're customizing a large language model for a specific domain. Which approach is most effective for tailoring the model's knowledge and accuracy to this domain?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "Fine-Tuning", correct: true, reason: "Ajusta los pesos internos del modelo con datos del dominio, incorporando el conocimiento de forma permanente." },
      { key: "B", text: "Few-Shot Learning", correct: false, reason: "Solo da ejemplos temporales en el prompt, sin modificar el conocimiento interno del modelo." },
      { key: "C", text: "Retrieval Augmented Generation - RAG", correct: false, reason: "Añade información externa en el momento de la consulta, pero no cambia el conocimiento interno del modelo." },
      { key: "D", text: "Zero-Shot Learning", correct: false, reason: "No involucra ninguna adaptación al dominio específico." }
    ]
  },
  {
    id: 35,
    question: "Which of the following is an example of hallucination in large language models (LLMs)?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "Overfitting", correct: false, reason: "Es un problema de memorización de datos de entrenamiento, un concepto distinto a la alucinación." },
      { key: "B", text: "Underfitting", correct: false, reason: "Es un problema de modelo demasiado simple, no relacionado con inventar información." },
      { key: "C", text: "Generating false or misleading information", correct: true, reason: "Esa es precisamente la definición de alucinación: el modelo genera contenido falso o engañoso con aparente confianza." },
      { key: "D", text: "Bias", correct: false, reason: "Es un sesgo sistemático en las respuestas, relacionado pero distinto al concepto de alucinación." }
    ]
  },
  {
    id: 36,
    question: "Which is a Foundation Model developed by Amazon, available via Bedrock?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "Amazon Titan", correct: true, reason: "Es la familia de modelos fundacionales desarrollada por Amazon, disponible en Bedrock." },
      { key: "B", text: "Amazon Lex", correct: false, reason: "Es un servicio para construir bots conversacionales, no un modelo fundacional." },
      { key: "C", text: "Amazon Polly", correct: false, reason: "Es un servicio de texto a voz, no un modelo fundacional." },
      { key: "D", text: "Amazon Connect", correct: false, reason: "Es un servicio de centro de contacto, no un modelo fundacional." }
    ]
  },
  {
    id: 37,
    question: "Which of the following algorithms are commonly used for classification tasks in machine learning? [Select Two]",
    type: "multi", pick: 2,
    options: [
      { key: "A", text: "Support Vector Machine (SVM)", correct: true, reason: "Es un algoritmo supervisado clásico usado ampliamente para tareas de clasificación." },
      { key: "B", text: "XGBoost", correct: true, reason: "Es un algoritmo de boosting muy usado para clasificación (y regresión) supervisada." },
      { key: "C", text: "K-Means", correct: false, reason: "Es un algoritmo de clustering no supervisado, no de clasificación." },
      { key: "D", text: "Mean Shift", correct: false, reason: "Es también un algoritmo de clustering no supervisado, no diseñado para clasificación." }
    ]
  },
  {
    id: 38,
    question: "Given a large dataset intended for inference, where latency is not a factor - which SageMaker model inference type (mode) would you choose for cost-effective predictions (inference)?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "Real-time", correct: false, reason: "Mantiene un endpoint siempre activo, con mayor costo, pensado para baja latencia, no para el escenario descrito." },
      { key: "B", text: "Batch", correct: true, reason: "Batch Transform está diseñado para procesar grandes volúmenes de datos offline de forma económica cuando la latencia no importa." },
      { key: "C", text: "On-demand Serverless", correct: false, reason: "Es útil para tráfico intermitente, pero no es la opción más económica para procesar un dataset masivo completo." },
      { key: "D", text: "Asynchronous", correct: false, reason: "Está pensado para payloads grandes con procesamiento más largo por solicitud, no para el procesamiento masivo por lotes." }
    ]
  },
  {
    id: 39,
    question: "What is the primary purpose of Amazon Q Developer?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "To manage AWS infrastructure", correct: false, reason: "No es su función principal; existen otros servicios (como Config o Systems Manager) para gestionar infraestructura." },
      { key: "B", text: "To assist developers with coding tasks and queries", correct: true, reason: "Es un asistente de IA diseñado para ayudar a los desarrolladores con código, dudas técnicas y productividad." },
      { key: "C", text: "To optimize database performance", correct: false, reason: "No es su enfoque principal; hay servicios específicos de AWS para ese propósito." },
      { key: "D", text: "To automate software testing", correct: false, reason: "Puede ayudar en tareas de testing, pero su propósito central es la asistencia general de codificación." }
    ]
  },
  {
    id: 40,
    question: "What kind of prompt attack is this: 'Explain why [the false statement] is true, considering that it's usually known to be false.'",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "Jailbreaking", correct: false, reason: "Busca evadir por completo las restricciones de seguridad del modelo, no simplemente hacerlo defender una afirmación falsa." },
      { key: "B", text: "Prompt Poisoning", correct: false, reason: "Consiste en insertar datos sesgados/engañosos que contaminan el prompt, un mecanismo distinto de forzar una justificación de algo falso." },
      { key: "C", text: "Adversarial Prompting", correct: true, reason: "Es exactamente diseñar una entrada para explotar debilidades del modelo y hacerlo justificar una afirmación falsa." },
      { key: "D", text: "Fine-tuning", correct: false, reason: "Es una técnica de entrenamiento, no un ataque de prompt." }
    ]
  },
  {
    id: 41,
    question: "You're building a text summarization tool. Which metric is best for measuring how well it captures the key points of the original text?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "BERTScore", correct: false, reason: "Mide similitud semántica general, pero no está especializado en evaluar recall de puntos clave en resúmenes." },
      { key: "B", text: "ROUGE - Recall-Oriented Understudy for Gisting Evaluation", correct: true, reason: "Fue diseñado específicamente para evaluar resúmenes, midiendo qué tan bien se capturan los puntos clave del texto original." },
      { key: "C", text: "Word Error Rate (WER)", correct: false, reason: "Se usa para evaluar precisión de transcripciones de voz a texto, no resúmenes." },
      { key: "D", text: "Bilingual Evaluation Understudy (BLEU)", correct: false, reason: "Está orientado a evaluar calidad de traducción automática, no de resúmenes." }
    ]
  },
  {
    id: 42,
    question: "An AI customer service agent, is unable to accurately identify Customer Intent based on Customer Message. You can improve it's performance by using training data in which format:",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "Customer Message and Customer Intent", correct: true, reason: "Entrenar directamente con pares mensaje→intención enseña al modelo a identificar la intención a partir del mensaje del cliente." },
      { key: "B", text: "Customer Message and Agent Response", correct: false, reason: "Enseñaría a generar respuestas, no a clasificar la intención del cliente." },
      { key: "C", text: "Customer Intent and Agent response", correct: false, reason: "No incluye el mensaje original del cliente, que es justamente la entrada que se necesita aprender a interpretar." },
      { key: "D", text: "Agent Response and Customer Intent", correct: false, reason: "El orden y contenido no ayudan a mapear el mensaje del cliente hacia su intención." }
    ]
  },
  {
    id: 43,
    question: "How are users typically charged for using a foundation model? [Select Two]",
    type: "multi", pick: 2,
    options: [
      { key: "A", text: "Number of Input Tokens", correct: true, reason: "Los proveedores de FMs (como Bedrock) cobran según la cantidad de tokens de entrada procesados." },
      { key: "B", text: "Number of Output Tokens", correct: true, reason: "También se cobra según la cantidad de tokens generados como salida." },
      { key: "C", text: "Model Architecture", correct: false, reason: "No es una métrica de facturación por uso, sino una característica técnica del modelo." },
      { key: "D", text: "Inference Latency", correct: false, reason: "La latencia no es directamente un factor de cobro en los modelos de precios típicos de FMs." }
    ]
  },
  {
    id: 44,
    question: "Which AWS AI Service can be used to extract health data from unstructured text such as clinical notes & medical records?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "Amazon Comprehend Medical", correct: true, reason: "Está especializado en extraer entidades e información médica relevante de texto clínico no estructurado." },
      { key: "B", text: "Amazon Transcribe Medical", correct: false, reason: "Convierte voz médica a texto, no extrae información de texto ya existente." },
      { key: "C", text: "Amazon HealthLake", correct: false, reason: "Almacena y analiza datos de salud ya estructurados, no es la herramienta de extracción en sí." },
      { key: "D", text: "Amazon Rekognition", correct: false, reason: "Analiza imágenes y video, no texto clínico." }
    ]
  },
  {
    id: 45,
    question: "Which type of machine learning model is specifically designed to generate new data that resembles existing data?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "Autoencoder", correct: false, reason: "Se usa principalmente para compresión/reconstrucción de datos, no está optimizado para generar datos nuevos y diversos." },
      { key: "B", text: "Generative Adversarial Network (GAN)", correct: true, reason: "Está diseñada específicamente con un proceso competitivo (generador vs discriminador) para crear datos nuevos y realistas." },
      { key: "C", text: "Decision Tree", correct: false, reason: "Es un modelo de clasificación/regresión, no generativo." },
      { key: "D", text: "Support Vector Machine (SVM)", correct: false, reason: "Es también un modelo de clasificación/regresión, no diseñado para generar datos nuevos." }
    ]
  },
  {
    id: 46,
    question: "Users are going to use long prompts to ask questions from their Large Language Model. What key aspect should be considered while selecting the LLM to use?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "Inference Latency", correct: false, reason: "Afecta la velocidad de respuesta, no la capacidad del modelo para procesar prompts largos." },
      { key: "B", text: "Maximum Context Window", correct: true, reason: "Determina cuánto texto (tokens) puede procesar el modelo en un solo prompt, siendo clave para prompts largos." },
      { key: "C", text: "Model Size", correct: false, reason: "Se relaciona con la capacidad general del modelo, pero no específicamente con cuánto texto de entrada puede aceptar." },
      { key: "D", text: "Training Data", correct: false, reason: "Afecta el conocimiento del modelo, no el límite de longitud de los prompts que puede procesar." }
    ]
  },
  {
    id: 47,
    question: "Which of the following best describes the primary purpose of Amazon SageMaker Feature Store?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "To automatically train and deploy machine learning models", correct: false, reason: "Esa función corresponde a SageMaker Autopilot o Pipelines, no a Feature Store." },
      { key: "B", text: "To store and manage features for machine learning workflows", correct: true, reason: "Es un repositorio centralizado diseñado específicamente para almacenar, compartir y gestionar features de ML." },
      { key: "C", text: "To provide a marketplace for pre-trained machine learning models", correct: false, reason: "Esa función corresponde a JumpStart o AWS Marketplace, no a Feature Store." },
      { key: "D", text: "To optimize the performance of SageMaker training jobs", correct: false, reason: "Esa optimización corresponde a herramientas como Debugger o entrenamiento distribuido, no a Feature Store." }
    ]
  },
  {
    id: 48,
    question: "A healthcare organization is developing an AI-powered diagnostic tool to assist in early detection of a rare disease. With respect to regulatory compliance concerns - which of the following is least relevant?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "Ensuring the AI system is unbiased and does not discriminate against certain patient demographics.", correct: false, reason: "Es una preocupación central de cumplimiento regulatorio (equidad/fairness) en salud." },
      { key: "B", text: "Minimizing operational expenses of the AI system.", correct: true, reason: "Es una preocupación de negocio/costos, no un requisito de cumplimiento regulatorio como tal." },
      { key: "C", text: "Ensuring the AI system is transparent in its decision-making process.", correct: false, reason: "La transparencia/explicabilidad es un requisito regulatorio clave en sistemas de salud." },
      { key: "D", text: "Preventing the AI system from being used for unauthorized purposes.", correct: false, reason: "El uso autorizado y seguro del sistema es también una preocupación regulatoria y de seguridad relevante." }
    ]
  },
  {
    id: 49,
    question: "You're a large enterprise with a massive amount of unstructured data scattered across various internal systems. You want to provide your employees with a powerful search tool that can understand natural language queries and return accurate, relevant results. Which AWS service would best meet this need?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "Amazon Redshift", correct: false, reason: "Es un data warehouse para analítica sobre datos estructurados, no un motor de búsqueda en lenguaje natural." },
      { key: "B", text: "Amazon Lex", correct: false, reason: "Está diseñado para construir chatbots conversacionales, no para búsqueda empresarial sobre documentos." },
      { key: "C", text: "Amazon Kendra", correct: true, reason: "Es un servicio de búsqueda empresarial que entiende lenguaje natural y busca en datos no estructurados de múltiples fuentes." },
      { key: "D", text: "Amazon DynamoDB", correct: false, reason: "Es una base de datos NoSQL, no una herramienta de búsqueda semántica en lenguaje natural." }
    ]
  },
  {
    id: 50,
    question: "A data scientist is working on a project that requires rapid prototyping and experimentation with various machine learning algorithms. Which AWS service would be most suitable for this task?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "Amazon SageMaker Ground Truth", correct: false, reason: "Es un servicio de etiquetado de datos, no de experimentación con algoritmos." },
      { key: "B", text: "Amazon Elastic Compute Cloud (EC2)", correct: false, reason: "Provee cómputo genérico, pero no herramientas de experimentación automatizada de ML." },
      { key: "C", text: "Amazon SageMaker AutoPilot", correct: true, reason: "Automatiza la prueba de múltiples algoritmos y configuraciones (AutoML), ideal para prototipado rápido." },
      { key: "D", text: "Amazon Bedrock", correct: false, reason: "Da acceso a modelos fundacionales pre-entrenados, no a experimentación con algoritmos de ML personalizados." }
    ]
  },
  {
    id: 51,
    question: "A large company wants to create an application for their Sales Managers - that can reason, perform multi-step tasks and provide insightful responses from their enterprise data. Which AWS service would be most suitable for this task?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "Amazon Lex", correct: false, reason: "Construye interfaces conversacionales básicas, sin capacidades de razonamiento multi-paso avanzado." },
      { key: "B", text: "Amazon SageMaker", correct: false, reason: "Requeriría construir esta lógica desde cero, siendo un esfuerzo mucho mayor que usar un servicio ya orientado a agentes." },
      { key: "C", text: "Amazon Bedrock Knowledgebases", correct: false, reason: "Provee recuperación de información (RAG), pero no orquesta por sí sola tareas de múltiples pasos y acciones." },
      { key: "D", text: "Amazon Bedrock Agents", correct: true, reason: "Está diseñado para razonar, orquestar tareas multi-paso y actuar sobre datos empresariales de forma autónoma." }
    ]
  },
  {
    id: 52,
    question: "A company wants to analyze customer reviews to identify common themes and sentiments. Which AWS service can the company use to meet this requirement?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "Amazon Connect", correct: false, reason: "Es una plataforma de centro de contacto, no un servicio de análisis de texto." },
      { key: "B", text: "Amazon Comprehend", correct: true, reason: "Está diseñado para analizar texto y detectar sentimiento, temas clave y entidades en reseñas de clientes." },
      { key: "C", text: "Amazon Translate", correct: false, reason: "Traduce texto entre idiomas, no analiza sentimiento ni temas." },
      { key: "D", text: "Amazon Transcribe", correct: false, reason: "Convierte audio a texto, no analiza el contenido textual de reseñas ya escritas." }
    ]
  },
  {
    id: 53,
    question: "A company wants to transform data from one format to another to prepare it for machine learning tasks. Which AWS service is best suited for this data transformation?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "AWS Glue", correct: true, reason: "Es el servicio ETL de AWS diseñado específicamente para transformar y preparar datos para su uso posterior, incluido ML." },
      { key: "B", text: "Amazon Translate", correct: false, reason: "Traduce idiomas en texto, no transforma formatos de datos para ML." },
      { key: "C", text: "AWS Config", correct: false, reason: "Rastrea configuración y cumplimiento de recursos AWS, no transforma datos." },
      { key: "D", text: "Amazon Kinesis", correct: false, reason: "Está enfocado en ingesta de datos en streaming, no es la herramienta principal de transformación tipo ETL." }
    ]
  },
  {
    id: 54,
    question: "A company wants to deploy a trained machine learning model for real-time inference. Which AWS service would be most suitable for this purpose?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "Amazon SageMaker JumpStart", correct: false, reason: "Provee plantillas/modelos pre-construidos, pero el despliegue en tiempo real se hace mediante Endpoints." },
      { key: "B", text: "Amazon Personalize", correct: false, reason: "Es un servicio específico para recomendaciones, no una solución general de despliegue en tiempo real." },
      { key: "C", text: "Amazon Elastic Compute Cloud (EC2)", correct: false, reason: "Requeriría configurar manualmente toda la infraestructura de inferencia, en vez de usar una solución gestionada." },
      { key: "D", text: "Amazon SageMaker Endpoints", correct: true, reason: "Está diseñado específicamente para desplegar modelos entrenados y servir inferencia en tiempo real de forma gestionada." }
    ]
  },
  {
    id: 55,
    question: "A company has deployed a machine learning model for customer sentiment analysis. To ensure the model's accuracy and reliability, which AWS services should be used for monitoring and human review? [Select Two]",
    type: "multi", pick: 2,
    options: [
      { key: "A", text: "Amazon Bedrock", correct: false, reason: "Da acceso a modelos fundacionales, pero no es una herramienta de monitoreo ni de revisión humana." },
      { key: "B", text: "Amazon SageMaker Model Monitor", correct: true, reason: "Monitorea continuamente la calidad y el drift del modelo en producción." },
      { key: "C", text: "Amazon SageMaker Ground Truth", correct: false, reason: "Se usa para el etiquetado inicial de datos, no para monitoreo continuo ni revisión de predicciones en producción." },
      { key: "D", text: "Amazon A2I (Amazon Augmented AI)", correct: true, reason: "Permite incorporar revisión humana sobre las predicciones del modelo cuando la confianza es baja." }
    ]
  },
  {
    id: 56,
    question: "A ML specialist is training a large deep learning model on a massive dataset in Amazon SageMaker - a single GPU may not handle this well. Which SageMaker feature can help optimize the training process for large models and datasets?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "Incremental Training", correct: false, reason: "Permite continuar entrenando con nuevos datos, pero no resuelve la limitación de una sola GPU para modelos masivos." },
      { key: "B", text: "Hyperparameter tuning", correct: false, reason: "Optimiza configuraciones del modelo, no distribuye la carga de cómputo entre dispositivos." },
      { key: "C", text: "Pipe Mode", correct: false, reason: "Optimiza el streaming eficiente de datos desde S3, pero no aborda el límite de tamaño del modelo por GPU." },
      { key: "D", text: "Model Parallelism", correct: true, reason: "Divide el modelo entre múltiples GPUs/dispositivos, permitiendo entrenar modelos y datasets muy grandes que no caben en una sola GPU." }
    ]
  },
  {
    id: 57,
    question: "You're working with a large dataset with many features. To improve your model's performance and computational efficiency, you need to simplify the data without losing significant information. Which technique would be most effective for achieving this goal?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "Dimensionality Reduction", correct: true, reason: "Reduce el número de features conservando la información más relevante, mejorando eficiencia sin perder información significativa." },
      { key: "B", text: "Feature Engineering", correct: false, reason: "Crea o transforma features, pero no necesariamente reduce su cantidad." },
      { key: "C", text: "Data Augmentation", correct: false, reason: "Aumenta la cantidad/diversidad de datos, justo el objetivo contrario al de simplificar." },
      { key: "D", text: "Data Cleaning", correct: false, reason: "Corrige problemas de calidad de los datos, pero no reduce el número de features." }
    ]
  },
  {
    id: 58,
    question: "You want to generate highly detailed images based on text descriptions. Which AI model, specifically designed for generative tasks and capable of producing high-quality, diverse outputs, would be most suitable for this task?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "Generative Adversarial Networks (GANs)", correct: false, reason: "Pueden generar imágenes, pero para generación detallada de imágenes a partir de texto, los modelos de difusión suelen ser más adecuados y son los destacados en este contexto." },
      { key: "B", text: "Recurrent Neural Networks (RNNs)", correct: false, reason: "Están diseñadas para datos secuenciales como texto o series de tiempo, no para generación de imágenes." },
      { key: "C", text: "Convolutional Neural Networks (CNNs)", correct: false, reason: "Son excelentes para reconocer/clasificar imágenes, pero no están diseñadas principalmente para generarlas desde texto." },
      { key: "D", text: "Stable Diffusion", correct: true, reason: "Es un modelo de difusión diseñado específicamente para generación de imágenes detalladas y diversas a partir de texto." }
    ]
  },
  {
    id: 59,
    question: "A company has a system that generates vector embeddings from product data. They want to improve the speed and accuracy of finding similar products. Which AWS services are best suited for implementing vector search to optimize the system? [Select Three]",
    type: "multi", pick: 3,
    options: [
      { key: "A", text: "Amazon OpenSearch Service", correct: true, reason: "Tiene soporte nativo para búsqueda vectorial de alto rendimiento." },
      { key: "B", text: "Amazon Redshift", correct: false, reason: "Es un data warehouse orientado a analítica estructurada, no está diseñado para búsqueda de similitud vectorial." },
      { key: "C", text: "Amazon Neptune", correct: true, reason: "Como base de datos de grafos, también soporta capacidades de búsqueda vectorial." },
      { key: "D", text: "Amazon DocumentDB (with MongoDB compatibility)", correct: true, reason: "Soporta búsqueda vectorial, siendo una opción válida para similitud de productos." }
    ]
  },
  {
    id: 60,
    question: "A bank receives numerous loan applications daily. The loan processing team manually extracts information from these applications, which is time-consuming. The goal is to automate this process using AI tools. Which AWS Service would be useful here?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "Amazon Rekognition", correct: false, reason: "Analiza imágenes y video (rostros, objetos), no está diseñado para extraer datos de formularios/documentos." },
      { key: "B", text: "Amazon Textract", correct: true, reason: "Está diseñado específicamente para extraer texto, escritura a mano y datos de documentos escaneados como solicitudes de préstamo." },
      { key: "C", text: "Amazon Translate", correct: false, reason: "Traduce idiomas, no extrae datos estructurados de documentos." },
      { key: "D", text: "Amazon Transcribe", correct: false, reason: "Convierte voz a texto, no extrae datos de documentos escritos." }
    ]
  },
  {
    id: 61,
    question: "A healthcare company wants to develop a machine learning model to predict the likelihood of a patient developing diabetes based on various health indicators. Which of the following metrics would be most appropriate for evaluating the model's performance? [Select Two]",
    type: "multi", pick: 2,
    options: [
      { key: "A", text: "Accuracy", correct: false, reason: "Puede ser engañosa cuando las clases están desbalanceadas (pocos casos positivos de diabetes), no es la más apropiada aquí." },
      { key: "B", text: "Precision", correct: false, reason: "Es útil, pero en un contexto médico es más crítico no dejar pasar casos positivos reales (recall) que solo la precisión." },
      { key: "C", text: "F1-Score", correct: false, reason: "Es una métrica balanceada útil, pero en este escenario Recall y AUC-ROC son las más destacadas para datos médicos desbalanceados." },
      { key: "D", text: "Recall (Sensitivity)", correct: true, reason: "Es crucial en salud para minimizar los falsos negativos, es decir, no dejar pacientes en riesgo sin detectar." },
      { key: "E", text: "Area Under ROC Curve (AUC-ROC)", correct: true, reason: "Mide la capacidad global del modelo para distinguir entre pacientes con y sin la condición, robusta ante desbalance de clases." }
    ]
  },
  {
    id: 62,
    question: "An organization has trained a deep learning model on a large dataset of general images. They now want to apply the same model to classify medical images with a smaller (additional training) dataset. Which machine learning technique would be most suitable in this scenario?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "Reinforcement Learning", correct: false, reason: "Se basa en recompensas por acciones, no es aplicable a la reutilización de un modelo de clasificación de imágenes ya entrenado." },
      { key: "B", text: "Transfer Learning", correct: true, reason: "Permite reutilizar el conocimiento de un modelo ya entrenado y adaptarlo a una nueva tarea con un dataset más pequeño." },
      { key: "C", text: "Supervised Learning", correct: false, reason: "Describe el paradigma general de entrenamiento con etiquetas, pero no la técnica específica de reutilizar un modelo pre-entrenado." },
      { key: "D", text: "Unsupervised Learning", correct: false, reason: "No aplica, ya que el escenario involucra reentrenar con datos adicionales etiquetados sobre un modelo existente." }
    ]
  },
  {
    id: 63,
    question: "You are building a machine learning model on AWS and want to share it securely with a third-party partner. Which AWS service would you use to establish a private connection between your VPC and the partner's VPC, ensuring that the data remains within your AWS account and is not exposed to the public internet?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "AWS Direct Connect", correct: false, reason: "Establece un enlace dedicado entre on-premises y AWS, no una conexión privada entre dos VPCs directamente." },
      { key: "B", text: "AWS PrivateLink", correct: true, reason: "Permite establecer conectividad privada entre VPCs sin exponer el tráfico a la internet pública." },
      { key: "C", text: "AWS Transit Gateway", correct: false, reason: "Es un hub para conectar muchas VPCs/redes, más complejo de lo necesario para una conexión punto a punto con un solo socio." },
      { key: "D", text: "AWS VPN", correct: false, reason: "Crea un túnel cifrado sobre internet pública, no mantiene el tráfico enteramente dentro de la red de AWS como PrivateLink." }
    ]
  },
  {
    id: 64,
    question: "You are training a machine learning model on sensitive customer data using AWS SageMaker. Under the AWS Shared Responsibility model, which of the following is primarily your responsibility?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "Securing the AWS SageMaker infrastructure", correct: false, reason: "Es responsabilidad de AWS ('seguridad DE la nube'), no del cliente." },
      { key: "B", text: "Protecting underlying operating system of the SageMaker instance", correct: false, reason: "Al ser un servicio gestionado, AWS es responsable de proteger el sistema operativo subyacente." },
      { key: "C", text: "Ensuring security for customer data stored in S3", correct: true, reason: "La seguridad de los datos del cliente ('seguridad EN la nube') es siempre responsabilidad del cliente, incluyendo cómo se almacenan y protegen en S3." },
      { key: "D", text: "Patching the AWS SageMaker software", correct: false, reason: "Es responsabilidad de AWS mantener y parchear el software del servicio gestionado." }
    ]
  },
  {
    id: 65,
    question: "When implementing the Generative AI Security Scoping Matrix, which of the following factors should be assessed to determine the level of risk associated with a generative AI project?",
    type: "single", pick: 1,
    options: [
      { key: "A", text: "The model's computational efficiency", correct: false, reason: "Es una preocupación de rendimiento/costo, no un factor de riesgo de seguridad en la matriz." },
      { key: "B", text: "The sensitivity of the data used to train the model", correct: true, reason: "La sensibilidad de los datos es un factor clave para determinar el nivel de riesgo en la Generative AI Security Scoping Matrix." },
      { key: "C", text: "Inference Latency", correct: false, reason: "Es una métrica de rendimiento, no un factor determinante del nivel de riesgo de seguridad." },
      { key: "D", text: "The number of parameters in the model", correct: false, reason: "Describe el tamaño del modelo, no está directamente relacionado con la evaluación de riesgo de seguridad de la matriz." }
    ]
  }
];
