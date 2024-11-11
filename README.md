# DePaul Cloud Project

This project is a full-stack web application that includes a **Django-based backend** for managing university recommendations and a **Next.js frontend** for the user interface.

## Backend (Django - Contact Us API)

This part of the project is a Django-based web application that manages university recommendations and includes a Contact Us API.

### Installation

#### Prerequisites

- Python 3.x
- pip (Python package installer)
- virtualenv (optional but recommended)

#### Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/RichardLechko/depaul-cloud-project.git
   cd depaul-cloud-project/
   ```

2. **Create and Activate a Virtual Environment**

   ```bash
   # Create virtual environment
   python -m venv proj-env

   # Activate the virtual environment
   # On Windows
   proj-env\Scripts\activate
   # On macOS/Linux
   source proj-env/bin/activate
   ```

3. **Install Dependencies**

   ```bash
   pip install -r backend/requirements.txt
   ```

4. **Apply Migrations**

   ```bash
   python backend/manage.py migrate
   ```

5. **Run the Development Server**

   ```bash
   python backend/manage.py runserver
   ```

6. **Access the Application**

   Open your web browser and go to `http://127.0.0.1:8000/`

#### Contact Us API

You can use the contact_us API to submit contact form data. The endpoint is:

- `http://127.0.0.1:8000/api/contact/`

Example POST request in JSON format:

```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "message": "Hello, I am interested in your services."
}
```
