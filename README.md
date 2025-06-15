# FinWhisper Insights Dashboard

A professional, AI-powered financial analyst dashboard for investors, analysts, and researchers. Combines advanced NLP, LLMs, and real-time market data to deliver actionable insights from earnings call transcripts and financial reports.

---

## 🚀 Features

- **PDF Upload & Extraction**: Upload multiple earnings call transcripts or financial reports. Automatic text extraction and quarter/year recognition from filenames.
- **AI Chatbot**: Ask questions about your uploaded documents using a powerful LLM-based chatbot with Markdown support.
- **Market Intelligence**: Get real-time stock data, news, and analytics for any ticker.
- **Sentiment & Stock Correlation**: Visualize sentiment scores and stock price changes across all quarters/years. Includes correlation and Granger causality analysis to reveal predictive power.
- **Narrative Insights**: LLM-generated, analyst-style summaries for each quarter or year.
- **Earnings Reaction Tracker**: See how stock prices react to earnings events.
- **Topic Sentiment Heatmap**: Explore sentiment trends by topic and time.
- **GPU Acceleration**: Uses GPU for embeddings and LLMs when available (HuggingFace, LangChain, ChromaDB).
- **Modern UI/UX**: Glassmorphic, responsive dashboard built with React, Tailwind, and Recharts.

---

## 🛠️ Tech Stack

- **Frontend**: React, Vite, TypeScript, Tailwind CSS, Recharts
- **Backend**: FastAPI, LangChain, ChromaDB, HuggingFace Transformers, yFinance, statsmodels
- **AI/NLP**: LLMs (Ollama, HuggingFace), FinBERT, custom sentiment lexicons

---

## 📦 Installation

1. **Clone the repo:**
   ```sh
   git clone https://github.com/yourusername/fin-whisper-insights-dash.git
   cd fin-whisper-insights-dash
   ```
2. **Backend setup:**
   ```sh
   cd backend
   python -m venv venv
   venv\Scripts\activate  # On Windows
   pip install -r ../requirements.txt
   uvicorn main:app --reload
   ```
3. **Frontend setup:**
   ```sh
   cd ..
   npm install
   npm run dev
   ```
4. **Open in browser:**
   - Visit [http://localhost:5173](http://localhost:5173)

---

## 📊 How It Works
![Image](https://github.com/user-attachments/assets/5794f1ca-cc2f-4117-a9a0-accee67f6ccd) 
![Image](https://github.com/user-attachments/assets/c00d2e4d-9682-4f2a-a88b-cc397f178c9a)
![Image](https://github.com/user-attachments/assets/5a99347d-b0fe-4d80-a88b-1d9e4abb55eb)

- **Upload PDFs**: Drag and drop or select multiple transcripts. The app extracts text and identifies quarter/year from filenames (e.g., `Company-Q4-FY23.pdf`).
   ![Image](https://github.com/user-attachments/assets/c8881065-6e6c-44bc-ac9e-f6da6ebf418e)
- **Analytics**: All analytics cards aggregate data across all uploaded quarters/years, giving you a continuous, multi-year view.
   ![Image](https://github.com/user-attachments/assets/4c19f4fa-4a18-43ce-8f25-3ed4643e9249)
- **Sentiment & Stock Correlation**: See how sentiment scores and stock price changes move together. Granger causality analysis tells you if sentiment is a leading indicator for price.
   ![Image](https://github.com/user-attachments/assets/f2c0b99a-8f57-4f68-9b67-4f7aaa3a574c)
- **Chatbot**: Ask questions about your documents and get LLM-powered answers.

---

## 📈 Granger Causality Explained

> **Granger causality** tests if past values of sentiment scores help predict future stock price changes. If the test is significant, it means sentiment is not just correlated with price, but actually helps forecast it. This is a powerful tool for investors looking for leading indicators.

- **How to use:**
  - If the dashboard shows "Sentiment helps predict price (statistically significant)", sentiment is a useful factor for your investment decisions.
  - If not, sentiment alone may not be predictive—combine with other analytics.

---

## 🤖 AI & GPU Acceleration

- Uses HuggingFace Transformers and LangChain with GPU support for fast, accurate embeddings and LLM responses.
- ChromaDB for vector search and retrieval.

---

## 📝 License

MIT License. See [LICENSE](LICENSE) for details.

---

## 🙏 Acknowledgements

- [LangChain](https://github.com/langchain-ai/langchain)
- [ChromaDB](https://www.trychroma.com/)
- [HuggingFace Transformers](https://huggingface.co/transformers/)
- [FinBERT](https://github.com/ProsusAI/finBERT)
- [yFinance](https://github.com/ranaroussi/yfinance)
- [Recharts](https://recharts.org/)

---

## 💡 Contributing

Pull requests and issues are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📬 Contact

For questions or support, open an issue or contact the maintainer at [your-email@example.com].
