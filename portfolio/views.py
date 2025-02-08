from django.shortcuts import render
from .models import Article
from django.core.mail import send_mail
from django.shortcuts import render
from django.conf import settings
from django.core.mail import send_mail
from django.shortcuts import render

def home(request):
    return render(request, 'portfolio/home.html')

def about(request):
    return render(request, 'portfolio/about.html')

def contact(request):
    if request.method == 'POST':
        name = request.POST['name']
        email = request.POST['email']
        message = request.POST['message']

        send_mail(
            f"Message from {name}",
            message,
            email,
            [settings.EMAIL_HOST_USER],  
            fail_silently=False,
        )
        
        return render(request, 'portfolio/thank_you.html', {'name': name})
    
    return render(request, 'portfolio/contact.html')



def projects(request):
    return render(request, 'portfolio/projects.html')

def projects(request):
    return render(request, 'portfolio/projects.html')



def skills(request):
    return render(request, 'portfolio/skills.html')


def blog_list(request):
    articles = Article.objects.all().order_by('-date_published')
    return render(request, 'portfolio/blog_list.html', {'articles': articles})

def article_detail(request, article_id):
    article = Article.objects.get(id=article_id)
    return render(request, 'portfolio/article_detail.html', {'article': article})


