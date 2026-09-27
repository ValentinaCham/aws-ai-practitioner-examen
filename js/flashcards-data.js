/* Cartas de Memoria para Mi Amorcito 💌
   Cada carta: { id, category, term, definition }
   Fuente: teoría de la guía de estudio + documentación oficial de AWS
   sobre el examen AWS Certified AI Practitioner. */

const FLASHCARDS = [
  // ---------- Tipos generales de algoritmos de ML ----------
  { category: "Tipos de ML", term: "Clustering", definition: "Agrupa puntos de datos similares entre sí sin usar etiquetas previas (aprendizaje no supervisado)." },
  { category: "Tipos de ML", term: "Dimensionality Reduction", definition: "Reduce el número de features (variables) de un dataset conservando la información más relevante." },
  { category: "Tipos de ML", term: "Regression", definition: "Predice un valor numérico continuo (por ejemplo, un precio o una temperatura)." },
  { category: "Tipos de ML", term: "Classification", definition: "Predice un resultado categórico (por ejemplo, 'spam' o 'no spam')." },

  // ---------- Amazon SageMaker – Componentes ----------
  { category: "SageMaker", term: "SageMaker JumpStart", definition: "Provee modelos y plantillas de ML pre-construidas, listas para desplegar o ajustar." },
  { category: "SageMaker", term: "SageMaker Studio", definition: "IDE basado en web para todo el ciclo de desarrollo de ML; requiere algo de código pero centraliza el entorno de trabajo." },
  { category: "SageMaker", term: "SageMaker Canvas", definition: "Interfaz visual 'no-code' para construir modelos de ML sin escribir una sola línea de código." },
  { category: "SageMaker", term: "SageMaker Data Wrangler", definition: "Simplifica la preparación de datos: visualizar, limpiar, validar y transformar datos para ML." },
  { category: "SageMaker", term: "SageMaker Clarify", definition: "Detecta sesgos (bias) en los datos y modelos, y ofrece herramientas de explicabilidad para las predicciones." },
  { category: "SageMaker", term: "SageMaker Debugger", definition: "Herramientas para depurar y perfilar el proceso de entrenamiento de modelos de ML." },
  { category: "SageMaker", term: "SageMaker Autopilot", definition: "Automatiza el entrenamiento y ajuste de modelos (AutoML): prep de datos, selección de algoritmo, tuning de hiperparámetros y despliegue." },
  { category: "SageMaker", term: "SageMaker Model Cards", definition: "Documenta y comparte información del modelo: uso previsto, datos de entrenamiento y métricas de evaluación." },
  { category: "SageMaker", term: "SageMaker Feature Store", definition: "Repositorio centralizado para almacenar, compartir y gestionar features (variables) usadas en flujos de trabajo de ML." },
  { category: "SageMaker", term: "SageMaker Model Monitor", definition: "Monitorea continuamente la calidad y el desempeño de los modelos ya desplegados en producción." },
  { category: "SageMaker", term: "SageMaker Ground Truth", definition: "Servicio de etiquetado de datos que puede incluir revisión y validación humana." },
  { category: "SageMaker", term: "SageMaker Endpoints", definition: "Mecanismo gestionado para desplegar modelos entrenados y servir inferencia en tiempo real." },

  // ---------- Almacenamiento y búsqueda vectorial ----------
  { category: "Búsqueda Vectorial", term: "Amazon OpenSearch Service", definition: "Motor de búsqueda con soporte nativo para almacenar y consultar vectores/embeddings por similitud." },
  { category: "Búsqueda Vectorial", term: "Amazon MemoryDB", definition: "Almacén clave-valor en memoria, usado para guardar y recuperar embeddings de forma muy rápida." },
  { category: "Búsqueda Vectorial", term: "Aurora / RDS PostgreSQL (pgvector)", definition: "Con la extensión pgvector, estas bases de datos relacionales pueden funcionar como bases de datos vectoriales personalizadas." },
  { category: "Búsqueda Vectorial", term: "Amazon Kendra", definition: "Servicio de búsqueda empresarial gestionado que entiende lenguaje natural; también soporta embeddings vectoriales." },
  { category: "Búsqueda Vectorial", term: "Amazon Neptune", definition: "Base de datos de grafos de AWS, que también puede usarse para búsqueda vectorial sobre datos interconectados." },
  { category: "Búsqueda Vectorial", term: "Amazon DocumentDB", definition: "Base de datos de documentos compatible con MongoDB que soporta búsqueda vectorial." },
  { category: "Búsqueda Vectorial", term: "Pinecone, Milvus, Weaviate, Qdrant", definition: "Soluciones de terceros especializadas en almacenamiento y búsqueda de vectores/embeddings." },

  // ---------- Hiperparámetros de entrenamiento ----------
  { category: "Hiperparámetros (Training)", term: "Learning Rate", definition: "Controla el tamaño del paso durante la optimización del modelo en cada iteración." },
  { category: "Hiperparámetros (Training)", term: "Batch Size", definition: "Determina cuántas muestras de datos se procesan a la vez durante el entrenamiento." },
  { category: "Hiperparámetros (Training)", term: "Epochs", definition: "Número de veces que el dataset completo pasa por el modelo durante el entrenamiento." },
  { category: "Hiperparámetros (Training)", term: "Regularization", definition: "Técnicas (como L1 o L2) para prevenir el overfitting penalizando la complejidad del modelo." },
  { category: "Hiperparámetros (Training)", term: "Optimizer", definition: "Algoritmo usado para actualizar los pesos del modelo durante el entrenamiento (ej. Adam, SGD)." },

  // ---------- Hiperparámetros de inferencia ----------
  { category: "Hiperparámetros (Inference)", term: "Temperature", definition: "Controla la aleatoriedad del texto generado por un LLM; subirla aumenta la creatividad/variedad de las respuestas." },
  { category: "Hiperparámetros (Inference)", term: "Top-k Sampling", definition: "Selecciona únicamente los k tokens más probables como candidatos para la siguiente palabra generada." },
  { category: "Hiperparámetros (Inference)", term: "Top-p Sampling (nucleus)", definition: "Selecciona tokens candidatos según su probabilidad acumulada, en vez de un número fijo de opciones." },
  { category: "Hiperparámetros (Inference)", term: "Beam Search", definition: "Explora múltiples secuencias candidatas en paralelo antes de elegir la más probable en conjunto." },
  { category: "Hiperparámetros (Inference)", term: "Greedy Search", definition: "Selecciona siempre el token individual más probable en cada paso, sin explorar otras alternativas." },

  // ---------- Amazon AI Services (pre-entrenados) ----------
  { category: "AI Services", term: "Amazon Textract", definition: "Extrae texto, escritura a mano y datos estructurados de documentos escaneados o formularios." },
  { category: "AI Services", term: "Amazon Comprehend", definition: "Analiza texto para detectar sentimiento, entidades, frases clave y temas principales." },
  { category: "AI Services", term: "Amazon Bedrock", definition: "Da acceso gestionado a modelos fundacionales (FMs) pre-entrenados de varios proveedores, sin gestionar infraestructura." },
  { category: "AI Services", term: "Amazon SageMaker", definition: "Plataforma totalmente gestionada para construir, entrenar y desplegar modelos de ML personalizados." },
  { category: "AI Services", term: "Amazon Q Business", definition: "Asistente empresarial de IA generativa que responde preguntas usando los documentos y datos internos de la empresa." },
  { category: "AI Services", term: "Amazon Q Developer", definition: "Asistente de IA para desarrolladores: ayuda con código, dudas técnicas y productividad al programar." },
  { category: "AI Services", term: "Amazon Lex", definition: "Servicio para construir interfaces conversacionales (chatbots) usando reconocimiento de voz y lenguaje natural." },
  { category: "AI Services", term: "Amazon Polly", definition: "Convierte texto a voz (text-to-speech) de forma natural." },
  { category: "AI Services", term: "Amazon Rekognition", definition: "Analiza imágenes y video: detecta objetos, rostros, texto y actividades." },
  { category: "AI Services", term: "Amazon Translate", definition: "Traduce texto entre distintos idiomas de forma automática." },
  { category: "AI Services", term: "Amazon Transcribe", definition: "Convierte audio/voz a texto (speech-to-text)." },
  { category: "AI Services", term: "Amazon Personalize", definition: "Servicio para crear sistemas de recomendación personalizados sin ser experto en ML." },

  // ---------- Algoritmos de clasificación/regresión ----------
  { category: "Algoritmos ML", term: "Linear Regression", definition: "Predice una variable objetivo continua basándose en relaciones lineales entre features." },
  { category: "Algoritmos ML", term: "Decision Trees", definition: "Clasifica datos dividiéndolos recursivamente en subconjuntos según los valores de las features." },
  { category: "Algoritmos ML", term: "Graph Neural Networks (GNN)", definition: "Clasifica datos interconectados aprovechando la estructura de grafos para capturar relaciones entre nodos." },
  { category: "Algoritmos ML", term: "Logistic Regression", definition: "Predice la probabilidad de un resultado binario (sí/no)." },
  { category: "Algoritmos ML", term: "Support Vector Machine (SVM)", definition: "Algoritmo supervisado clásico, ampliamente usado para tareas de clasificación." },
  { category: "Algoritmos ML", term: "XGBoost", definition: "Algoritmo de boosting muy popular, usado tanto para clasificación como para regresión supervisada." },

  // ---------- Paradigmas de aprendizaje ----------
  { category: "Paradigmas de ML", term: "Supervised Learning", definition: "Entrena un modelo para predecir salidas a partir de datos previamente etiquetados." },
  { category: "Paradigmas de ML", term: "Unsupervised Learning", definition: "Entrena un modelo para encontrar patrones o relaciones ocultas en datos no etiquetados." },
  { category: "Paradigmas de ML", term: "Reinforcement Learning", definition: "Entrena un modelo (agente) para tomar decisiones mediante recompensas y castigos recibidos del entorno, por ensayo y error." },
  { category: "Paradigmas de ML", term: "Transfer Learning", definition: "Reutiliza el conocimiento de un modelo ya entrenado (en una tarea general) y lo adapta a una nueva tarea específica con menos datos." },

  // ---------- Amazon Bedrock – modelos de precio ----------
  { category: "Bedrock Pricing", term: "On-Demand", definition: "Pago por uso (por tokens), ideal para cargas de trabajo impredecibles o de experimentación." },
  { category: "Bedrock Pricing", term: "Provisioned Throughput", definition: "Capacidad reservada para cargas de trabajo predecibles, asegurando un rendimiento constante." },
  { category: "Bedrock Pricing", term: "Model Customization", definition: "Precio por entrenar modelos con tus propios datos (fine-tuning, continued pre-training); es para entrenamiento, no para inferencia." },

  // ---------- Unidades de NLP ----------
  { category: "NLP", term: "Token", definition: "Unidad básica de texto (palabra o subpalabra) usada para representar el lenguaje tras la tokenización." },
  { category: "NLP", term: "Vector Embedding", definition: "Representación numérica de un token/palabra en un espacio vectorial continuo, capturando su significado." },
  { category: "NLP", term: "n-gram", definition: "Secuencia de 'n' palabras o caracteres consecutivos de un texto, usada para analizar patrones del lenguaje." },
  { category: "NLP", term: "Vocabulary", definition: "Colección de todas las palabras/tokens únicos que un modelo reconoce y puede procesar." },
  { category: "NLP", term: "Context Window", definition: "Cantidad máxima de tokens (entrada + salida) que un modelo puede procesar de una sola vez; clave para prompts largos." },
  { category: "NLP", term: "Prompt Engineering", definition: "Práctica de diseñar y ajustar las instrucciones (prompts) dadas a un modelo para obtener mejores respuestas, sin reentrenarlo." },

  // ---------- Herramientas y gobernanza de IA responsable ----------
  { category: "IA Responsable", term: "AWS AI Service Cards", definition: "Documentan el uso previsto, limitaciones y consideraciones responsables de cada servicio de IA de AWS." },
  { category: "IA Responsable", term: "Amazon A2I (Augmented AI)", definition: "Permite incorporar revisión humana sobre las predicciones de un modelo cuando la confianza es baja." },
  { category: "IA Responsable", term: "Las 8 dimensiones de IA Responsable de AWS", definition: "Fairness (equidad), Explainability, Privacy & Security, Safety, Controllability, Veracity & Robustness, Governance y Transparency." },
  { category: "IA Responsable", term: "Hallucination (Alucinación)", definition: "Cuando un modelo genera información falsa o engañosa con apariencia de certeza." },
  { category: "IA Responsable", term: "Sampling Bias", definition: "Ocurre cuando los datos de entrenamiento no representan equitativamente a todos los grupos relevantes." },
  { category: "IA Responsable", term: "Algorithm Bias", definition: "Sesgo introducido por el propio diseño o lógica del algoritmo, no por los datos." },
  { category: "IA Responsable", term: "Observer Bias", definition: "Sesgo introducido por la subjetividad humana al etiquetar o interpretar los datos." },
  { category: "IA Responsable", term: "Recency Bias", definition: "Sesgo que ocurre al sobreponderar los datos o eventos más recientes frente a los históricos." },

  // ---------- Técnicas de mejora de modelos ----------
  { category: "Mejora de Modelos", term: "Fine-tuning", definition: "Entrena un modelo pre-entrenado con datos específicos del dominio, ajustando sus pesos internos de forma permanente." },
  { category: "Mejora de Modelos", term: "Retrieval Augmented Generation (RAG)", definition: "Mejora las respuestas de un LLM incorporando información recuperada de fuentes externas en el momento de la consulta." },
  { category: "Mejora de Modelos", term: "Few-shot Learning", definition: "Se le dan al modelo unos pocos ejemplos dentro del prompt para guiar su respuesta, sin modificar sus pesos." },
  { category: "Mejora de Modelos", term: "Zero-shot Learning", definition: "El modelo responde una tarea para la que no fue entrenado explícitamente, sin ejemplos previos en el prompt." },
  { category: "Mejora de Modelos", term: "Continued Pre-training", definition: "Continúa entrenando un modelo con más datos no etiquetados para ampliar su conocimiento general del dominio." },
  { category: "Mejora de Modelos", term: "Model Parallelism", definition: "Divide un modelo grande entre múltiples GPUs/dispositivos cuando no cabe en una sola." },
  { category: "Mejora de Modelos", term: "Data Parallelism", definition: "Divide los datos de entrenamiento entre múltiples dispositivos, cada uno con una copia completa del modelo." },

  // ---------- Ataques de prompt ----------
  { category: "Prompt Attacks", term: "Jailbreaking", definition: "Crear entradas para evadir las restricciones de seguridad de un modelo y provocar respuestas prohibidas o dañinas." },
  { category: "Prompt Attacks", term: "Prompt Poisoning", definition: "Introducir datos sesgados o engañosos dentro del prompt para influir o degradar la salida del modelo." },
  { category: "Prompt Attacks", term: "Adversarial Prompting", definition: "Crear entradas diseñadas para explotar debilidades del modelo y producir respuestas incorrectas o no deseadas." },

  // ---------- Métricas de evaluación de texto/generación ----------
  { category: "Métricas de Texto", term: "BLEU", definition: "Evalúa la calidad de texto traducido automáticamente de un idioma a otro (basado en coincidencia de n-gramas)." },
  { category: "Métricas de Texto", term: "BERTScore", definition: "Mide la similitud semántica entre un texto generado y uno de referencia, usando embeddings contextuales." },
  { category: "Métricas de Texto", term: "ROUGE", definition: "Diseñado específicamente para evaluar resúmenes de texto, midiendo el recall de los puntos clave." },
  { category: "Métricas de Texto", term: "Word Error Rate (WER)", definition: "Se usa principalmente en reconocimiento de voz, para medir la precisión de las transcripciones." },
  { category: "Métricas de Texto", term: "Perplexity", definition: "Mide qué tan bien un modelo de lenguaje predice el siguiente token; a menor perplexity, mejor el modelo." },

  // ---------- Servicios de salud de Amazon ----------
  { category: "Servicios de Salud", term: "Amazon Comprehend Medical", definition: "Extrae información médica relevante de texto clínico no estructurado, como notas médicas." },
  { category: "Servicios de Salud", term: "Amazon HealthLake", definition: "Almacena y analiza datos de salud, ya estructurados, en formatos interoperables." },
  { category: "Servicios de Salud", term: "Amazon Transcribe Medical", definition: "Convierte voz médica a texto (dictados clínicos, por ejemplo)." },

  // ---------- Arquitecturas de Deep Learning ----------
  { category: "Deep Learning", term: "Generative Adversarial Networks (GANs)", definition: "Modelos generativos que usan un proceso competitivo (generador vs. discriminador) para crear datos nuevos y realistas." },
  { category: "Deep Learning", term: "Recurrent Neural Networks (RNNs)", definition: "Redes neuronales diseñadas para procesar datos secuenciales, como texto o series de tiempo." },
  { category: "Deep Learning", term: "Convolutional Neural Networks (CNNs)", definition: "Especialmente efectivas para procesar imágenes y otros datos tipo grilla (identificar objetos, patrones visuales)." },
  { category: "Deep Learning", term: "Stable Diffusion", definition: "Modelo de difusión diseñado específicamente para generar imágenes detalladas y diversas a partir de texto." },

  // ---------- Métricas de evaluación para clasificación ----------
  { category: "Métricas de Clasificación", term: "Accuracy", definition: "Mide el porcentaje total de predicciones correctas sobre el total de casos." },
  { category: "Métricas de Clasificación", term: "Precision", definition: "Mide qué proporción de las predicciones positivas del modelo realmente son positivas." },
  { category: "Métricas de Clasificación", term: "Recall (Sensitivity)", definition: "Mide qué proporción de los casos positivos reales fueron correctamente identificados por el modelo." },
  { category: "Métricas de Clasificación", term: "F1-Score", definition: "Media armónica entre precision y recall; ofrece una medida balanceada del rendimiento del modelo." },
  { category: "Métricas de Clasificación", term: "Area Under ROC Curve (AUC-ROC)", definition: "Mide la capacidad del modelo para distinguir entre clases positivas y negativas, incluso con datos desbalanceados." },

  // ---------- Rendimiento y ajuste del modelo ----------
  { category: "Rendimiento del Modelo", term: "Overfitting", definition: "El modelo memoriza los datos de entrenamiento (baja bias, alta varianza) y no generaliza bien a datos nuevos." },
  { category: "Rendimiento del Modelo", term: "Underfitting", definition: "El modelo es demasiado simple (alta bias, baja varianza) y no aprende ni siquiera los patrones del entrenamiento." },
  { category: "Rendimiento del Modelo", term: "Bias (en el modelo)", definition: "Falla del modelo para capturar los verdaderos patrones presentes en los datos de entrenamiento." },
  { category: "Rendimiento del Modelo", term: "Variance", definition: "Sensibilidad excesiva del modelo a fluctuaciones y ruido específicos de los datos de entrenamiento." },
  { category: "Rendimiento del Modelo", term: "Meta ideal: bias y variance", definition: "Se busca un modelo con bajo bias y baja variance, para evitar tanto underfitting como overfitting." },

  // ---------- Generative AI en AWS (extra) ----------
  { category: "Generative AI en AWS", term: "Amazon Bedrock Agents", definition: "Permiten crear aplicaciones que razonan, orquestan tareas de varios pasos y actúan sobre datos/APIs empresariales." },
  { category: "Generative AI en AWS", term: "Amazon Bedrock Knowledge Bases", definition: "Servicio gestionado de RAG: conecta un modelo fundacional con tus fuentes de datos para responder con información actualizada." },
  { category: "Generative AI en AWS", term: "Guardrails for Amazon Bedrock", definition: "Filtra y bloquea contenido dañino, ofensivo o fuera de las políticas definidas, en las respuestas generadas." },
  { category: "Generative AI en AWS", term: "Amazon Titan", definition: "Familia de modelos fundacionales desarrollada por Amazon, disponible dentro de Bedrock." },
  { category: "Generative AI en AWS", term: "Foundation Model (FM)", definition: "Modelo de IA entrenado con enormes cantidades de datos, capaz de adaptarse a muchas tareas distintas (los LLMs son un tipo de FM)." },

  // ---------- Seguridad y cumplimiento ----------
  { category: "Seguridad y Cumplimiento", term: "AWS Artifact", definition: "Portal on-demand para acceder a reportes de cumplimiento y certificaciones de AWS." },
  { category: "Seguridad y Cumplimiento", term: "Amazon Inspector", definition: "Escanea automáticamente recursos como instancias EC2 en busca de vulnerabilidades de seguridad." },
  { category: "Seguridad y Cumplimiento", term: "Amazon Macie", definition: "Detecta automáticamente información sensible (como PII) dentro de tus datos almacenados en AWS." },
  { category: "Seguridad y Cumplimiento", term: "AWS CloudTrail", definition: "Registra de forma detallada cada llamada a la API de AWS, incluyendo el usuario y el timestamp, para auditoría." },
  { category: "Seguridad y Cumplimiento", term: "AWS Glue", definition: "Servicio de ETL (extraer, transformar, cargar) para preparar y transformar datos, incluido para tareas de ML." },
  { category: "Seguridad y Cumplimiento", term: "AWS PrivateLink", definition: "Permite establecer conectividad privada entre VPCs sin exponer el tráfico a la internet pública." },
  { category: "Seguridad y Cumplimiento", term: "AWS Shared Responsibility Model", definition: "AWS asegura 'la nube' (infraestructura, hardware, software gestionado); el cliente asegura 'lo que pone en la nube' (sus datos, configuración, accesos)." },
  { category: "Seguridad y Cumplimiento", term: "Generative AI Security Scoping Matrix", definition: "Marco de AWS para evaluar el nivel de riesgo de un proyecto de IA generativa, considerando factores como la sensibilidad de los datos usados." }
];
