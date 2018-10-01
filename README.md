# docX
Convert documents into Quizes! Built at HackNY

docX helps you learn and quickly access content of documents through an Alexa skill.
- Ask questions to Alexa about document content
- Get summary of documents 
- Ask Alexa to quiz you about document content 

The system includes the following components:
- Android app to upload documents/set automated document upload
- Firebase for User management and documents storage
- GCP application for extracting data, forming questions and extracting summary
- Alexa skill for accessing all data 

The GCP application uses GCP NLP for extracting raw data from text generated by OCR. 
We run a simple algorithm for generating questions from text.
All data is stored on Firebase and accessed by Node based API


Note - Alexa skill unstable AMD contains bugs
