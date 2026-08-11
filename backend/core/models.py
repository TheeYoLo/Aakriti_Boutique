import uuid
from django.db import models


class FabricCollection(models.Model):
    name = models.CharField(max_length=100, unique=True)

    class Meta:
        verbose_name_plural = "Fabric Collections"

    def __str__(self):
        return self.name


class Fabric(models.Model):
    name = models.CharField(max_length=100, unique=True)
    collection = models.ForeignKey(
        FabricCollection,
        on_delete=models.SET_NULL,
        null=True,
        blank=True,
        related_name="fabrics"
    )

    def __str__(self):
        return f"{self.name} ({self.collection.name})"


class Occasion(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name


class Saree(models.Model):
    # UUID as Primary Key (replaces custom hash IDs for standard security & scalability)
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255)
    fabric = models.ForeignKey(
        Fabric,
        on_delete=models.PROTECT,
        related_name="sarees"
    )
    # Allows a Saree to belong to multiple occasions (e.g., Wedding AND Festive)
    occasions = models.ManyToManyField(Occasion, related_name="sarees", blank=True)
    description = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class SareeVariant(models.Model):
    """
    Represents specific SKU/color variants of a Saree.
    Handles pricing, options (blouse), and stock levels.
    """
    class BlouseOption(models.TextChoices):
        WITH_BLOUSE = "WITH_BLOUSE_CLOTH", "With Blouse Cloth"
        WITHOUT_BLOUSE = "WITHOUT_BLOUSE_CLOTH", "Without Blouse Cloth"

    saree = models.ForeignKey(
        Saree,
        on_delete=models.CASCADE,
        related_name="variants"
    )
    color_name = models.CharField(max_length=50)  # e.g. "Espresso"
    color_code = models.CharField(max_length=20, blank=True)  # e.g. RGB or Hex code
    price = models.DecimalField(max_digits=10, decimal_places=2)  # Avoids floating point inaccuracies
    blouse_option = models.CharField(
        max_length=20,
        choices=BlouseOption.choices,
        default=BlouseOption.WITH_BLOUSE_CLOTH
    )
    quantity = models.PositiveIntegerField(default=0)

    class Meta:
        # Ensures duplicate color variants aren't created for the same saree option
        unique_together = ("saree", "color_name", "blouse_option")

    def __str__(self):
        return f"{self.saree.name} - {self.color_name} ({self.get_blouse_option_display()})"


class SareeImage(models.Model):
    variant = models.ForeignKey(
        SareeVariant,
        on_delete=models.CASCADE,
        related_name="images"
    )
    image = models.ImageField(upload_to="sarees/")
    is_primary = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-is_primary", "id"]

    def __str__(self):
        return f"Image for {self.variant}"