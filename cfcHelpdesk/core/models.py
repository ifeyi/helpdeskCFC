from django.db import models

# Create your models here.
class Utilisateur(models.Model):
    userName = models.CharField(max_length=128)
    userPosition = models.CharField(max_length=128)
    userDepartment = models.CharField(max_length=128)
    userPhone = models.CharField(max_length=128)
    userEmail = models.EmailField(max_length=128)
    userPassword = models.CharField(max_length=128)
    userRole = models.CharField(max_length=128)
    userCreatedAt = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['userName',]
        verbose_name_plural = 'Utilisateurs'

    def __str__(self):
        return self.userName
class Incident(models.Model):
    incidentTitle = models.CharField(max_length=128)
    incidentDescription = models.TextField(blank=True, null=True) 
    incidentCreatedAt = models.DateTimeField(auto_now_add=True) 
    incidentBeginning = models.DateTimeField(auto_now_add=False)
    incidentEnd = models.DateTimeField(auto_now_add=False)
    incidentCategory = models.CharField(max_length=128)
    incidentApplication = models.CharField(max_length=128)
    incidentAssignedTo = models.CharField(max_length=128)
    incidentLevel = models.CharField(max_length=128)
    incidentStatus = models.CharField(max_length=128)
    incidentResolutionTime = models.CharField(max_length=128)
    incidentImg = models.ImageField(upload_to='incidents-images/', blank=True, null=True)
    incidentCreateBy = models.ForeignKey(Utilisateur, related_name='incidents', on_delete=models.CASCADE)

    class Meta:
        ordering = ['incidentTitle',]
        verbose_name_plural = 'Incidents'

    def __str__(self):
        return self.incidentTitle
    
class Comments(models.Model):
    commentContent = models.TextField(blank=True, null=True) 
    commentCreatedAt = models.DateTimeField(auto_now_add=True) 
    commentImg = models.ImageField(upload_to='comment-images/', blank=True, null=True)
    commentCreateBy = models.ForeignKey(Utilisateur, related_name='comments', on_delete=models.CASCADE)
    commentCreateOn = models.ForeignKey(Incident, related_name='comments', on_delete=models.CASCADE)

    class Meta:
        ordering = ['commentContent',]
        verbose_name_plural = 'Commentaires'

    def __str__(self):
        return self.commentContent