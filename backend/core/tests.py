from django.test import TestCase
from django.contrib.auth import get_user_model

User = get_user_model()

class HeadlessAuthTestCase(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            username="testuser",
            email="test@example.com",
            password="Password123!"
        )

    def test_headless_login_success(self):
        response = self.client.post(
            "/_allauth/browser/v1/auth/login",
            data={
                "username": "testuser",
                "password": "Password123!"
            },
            content_type="application/json",
            HTTP_ACCEPT="application/json"
        )
        self.assertEqual(response.status_code, 200)

    def test_headless_login_invalid_password(self):
        response = self.client.post(
            "/_allauth/browser/v1/auth/login",
            data={
                "username": "testuser",
                "password": "WrongPassword"
            },
            content_type="application/json",
            HTTP_ACCEPT="application/json"
        )
        self.assertEqual(response.status_code, 400)