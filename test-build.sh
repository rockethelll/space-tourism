#!/bin/bash

# Script pour tester le build et voir le contenu qui sera déployé

echo "🚀 Building Angular application..."
npm run build

echo ""
echo "📁 Contenu du dossier de build (ce qui sera déployé):"
echo "=================================================="

if [ -d "dist/space-tourism-website-project/browser" ]; then
    echo "✅ Dossier browser/ trouvé"
    echo ""
    echo "📂 Structure des fichiers dans browser/:"
    ls -la dist/space-tourism-website-project/browser/
    
    echo ""
    echo "📊 Taille des fichiers principaux:"
    find dist/space-tourism-website-project/browser/ -name "*.js" -o -name "*.css" -o -name "*.html" | xargs ls -lh
    
    echo ""
    echo "🎯 Point d'entrée principal:"
    if [ -f "dist/space-tourism-website-project/browser/index.html" ]; then
        echo "✅ index.html présent"
    else
        echo "❌ index.html manquant"
    fi
    
    echo ""
    echo "🖼️  Assets (images, etc.):"
    if [ -d "dist/space-tourism-website-project/browser/images" ]; then
        echo "✅ Dossier images/ présent"
        find dist/space-tourism-website-project/browser/images/ -type f | wc -l | xargs echo "Nombre de fichiers images:"
    else
        echo "❌ Dossier images/ manquant"
    fi
    
    if [ -d "dist/space-tourism-website-project/prerendered-routes" ]; then
        echo ""
        echo "📋 Dossier prerendered-routes/ détecté (non déployé en statique):"
        ls -la dist/space-tourism-website-project/prerendered-routes/
    fi
    
else
    echo "❌ Erreur: Le dossier browser/ n'a pas été généré"
    echo "Vérifiez votre configuration Angular"
fi

echo ""
echo "🌐 Pour tester localement, vous pouvez servir le contenu avec:"
echo "npx http-server dist/space-tourism-website-project/browser/ -p 8080"
